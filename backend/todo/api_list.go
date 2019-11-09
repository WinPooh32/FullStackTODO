package todo

import (
	"backend/ent"
	"backend/ent/task"
	"backend/orm"
	"context"
	"log"
	"net/http"
	"runtime/debug"

	"github.com/gin-gonic/gin"
)

func storageGetTasks(ctx context.Context, client *ent.Client) ([]*ent.Task, error) {
	list, err := client.Task.
		Query().
		Order(ent.Desc(task.FieldID)).
		All(ctx)
	return list, err
}

// ListGet - Gets all TODO tasks.
func ListGet(ctx *gin.Context) {
	// Extract orm client from context
	cl, ok := orm.FromContext(ctx)
	if !ok {
		log.Println(string(debug.Stack()))
		internalError(ctx)
		return
	}

	list, err := storageGetTasks(ctx, cl)
	if err != nil {
		log.Println(err)
		internalError(ctx)
		return
	}

	if list == nil {
		list = []*ent.Task{}
	}

	ctx.JSON(http.StatusOK, list)
}
