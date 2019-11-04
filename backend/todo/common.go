package todo

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func internalError(ctx *gin.Context) {
	ctx.AbortWithStatusJSON(
		http.StatusInternalServerError,
		Error{Code: "INTERNAL", Message: ""},
	)
}
