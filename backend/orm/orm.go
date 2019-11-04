package orm

import (
	"backend/ent"
	"context"
	"log"

	"github.com/gin-gonic/gin"
	_ "github.com/mattn/go-sqlite3"
)

const uri = "backernd/orm"

func Connect() *ent.Client {
	client, err := ent.Open("sqlite3", "file:ent?mode=memory&cache=shared&_fk=1")
	if err != nil {
		log.Fatalf("failed opening connection to sqlite: %v", err)
	}

	// run the auto migration tool.
	if err := client.Schema.Create(context.Background()); err != nil {
		log.Fatalf("failed creating schema resources: %v", err)
	}

	return client
}

func NewMiddleware(cl *ent.Client) gin.HandlerFunc {
	return func(ctx *gin.Context) {
		ctx.Set(uri, cl)
	}
}

func FromContext(ctx *gin.Context) (cl *ent.Client, ok bool) {
	dbInterface, _ := ctx.Get(uri)
	cl, ok = dbInterface.(*ent.Client)
	return cl, ok
}
