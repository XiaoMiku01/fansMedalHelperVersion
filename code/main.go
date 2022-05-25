package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()
	router.GET("/", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"version":   "0.0.1",
			"changelog": "Hello\n World",
			"notice":    "",
		})
	})
	router.Run(":9000")
}
