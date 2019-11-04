package main

import (
	"log"

	"backend/orm"
	"backend/todo"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	log.Printf("Server started")

	client := orm.Connect()
	defer client.Close()

	cors := cors.Default() //FIXME for debug purpose
	router := gin.Default()

	router.Use(
		orm.NewMiddleware(client),
		cors,
	)

	todo.NewRouter(router)

	log.Fatal(router.Run(":8181"))
}
