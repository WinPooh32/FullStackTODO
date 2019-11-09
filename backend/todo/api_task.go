package todo

import (
	"context"
	"fmt"
	"log"
	"net/http"

	"backend/ent"
	"backend/ent/task"
	"backend/orm"

	"github.com/gin-gonic/gin"
)

type ActionForTask int

const (
	ActionAdd ActionForTask = iota
	ActionUpdate
	ActionDelete
	ActionUnknown
)

func taskAction(task Task) ActionForTask {
	hasId := task.Id != nil
	hasLable := task.Lable != nil
	hasIsComplete := task.IsComplete != nil

	if !hasId && hasLable && hasIsComplete {
		// Add new task
		return ActionAdd
	} else if hasId && (hasLable || hasIsComplete) {
		// Update task
		return ActionUpdate
	} else if hasId && !hasLable && !hasIsComplete {
		// Delete task
		return ActionDelete
	}

	return ActionUnknown
}

func storageAddTask(ctx context.Context, client *ent.Client, task Task) (*ent.Task, error) {
	t, err := client.Task.
		Create().
		SetLable(*task.Lable).
		SetIsComplete(*task.IsComplete).
		Save(ctx)
	if err != nil {
		return nil, fmt.Errorf("failed creating user: %v", err)
	}
	log.Println("task was created: ", t)
	return t, nil
}

func storageUpdateTask(ctx context.Context, client *ent.Client, tsk Task) (*ent.Task, error) {
	if tsk.Id == nil || tsk.Lable == nil || tsk.IsComplete == nil {
		return nil, fmt.Errorf("unexpected nil fields in Task")
	}

	searchId := int(*tsk.Id)

	exist, err := client.Task.
		Query().
		Where(task.IDEQ(searchId)).
		Exist(ctx)
	if err != nil || !exist {
		return nil, fmt.Errorf("failed to find task: %v", err)
	}

	t, err := client.Task.UpdateOneID(searchId).
		SetLable(*tsk.Lable).
		SetIsComplete(*tsk.IsComplete).
		Save(ctx)
	if err != nil {
		return nil, fmt.Errorf("failed to update task: %v", err)
	}

	log.Println("task was updated: ", t)
	return t, nil
}

func storageDeleteTask(ctx context.Context, client *ent.Client, tsk Task) error {
	searchId := int(*tsk.Id)

	err := client.Task.
		DeleteOneID(searchId).
		Exec(ctx)

	if err != nil {
		return fmt.Errorf("failed to delete task: %v", err)
	}

	return nil
}

// TaskDelete - Deletes task by id.
func TaskDelete(ctx *gin.Context) {
	var task Task

	// Extract orm client from context
	cl, ok := orm.FromContext(ctx)
	if !ok {
		internalError(ctx)
		return
	}

	// Try dind json to Task struct
	if err := ctx.ShouldBindJSON(&task); err != nil {
		log.Println(err)
		ctx.AbortWithStatusJSON(
			http.StatusBadRequest,
			Error{Code: "BAD_OBJECT", Message: err.Error()},
		)
		return
	}

	// Check task fields
	if taskAction(task) != ActionDelete {
		ctx.AbortWithStatusJSON(
			http.StatusBadRequest,
			Error{Code: "BAD_ACTION", Message: "Wrong action type."},
		)
		return
	}

	// Delete task from database
	err := storageDeleteTask(ctx, cl, task)
	if err != nil {
		log.Println(err)
		internalError(ctx)
		return
	}

	ctx.Status(http.StatusOK)
}

// TaskPut - Adds or update TODO task.
func TaskPut(ctx *gin.Context) {
	var task Task

	// Extract orm client from context
	cl, ok := orm.FromContext(ctx)
	if !ok {
		internalError(ctx)
		return
	}

	// Try dind json to Task struct
	if err := ctx.ShouldBindJSON(&task); err != nil {
		log.Println(err)
		ctx.AbortWithStatusJSON(
			http.StatusBadRequest,
			Error{Code: "BAD_OBJECT", Message: err.Error()},
		)
		return
	}

	// Check task fields
	action := taskAction(task)
	if !(action == ActionAdd || action == ActionUpdate) {
		ctx.AbortWithStatusJSON(
			http.StatusBadRequest,
			Error{Code: "BAD_ACTION", Message: "Wrong action type."},
		)
		return
	}

	var err error
	if action == ActionAdd {
		_, err = storageAddTask(ctx, cl, task)
	} else {
		_, err = storageUpdateTask(ctx, cl, task)
	}

	if err != nil {
		log.Println(err)
		internalError(ctx)
		return
	}

	ctx.Status(http.StatusOK)
}
