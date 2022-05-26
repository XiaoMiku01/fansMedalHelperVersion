package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()
	router.GET("/", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"version":   "0.2.2",
			"changelog": "\n\n增加异常重试处理\n\n更加详细的报错日志",
			"notice":    "",
		})
	})
	router.Run(":9000")
}
