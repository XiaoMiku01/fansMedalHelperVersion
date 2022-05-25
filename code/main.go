package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()
	router.GET("/", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"version":   "0.2.1",
			"changelog": "更新：增加了微信通知 \n 简单的异常处理",
			"notice":    "",
		})
	})
	router.Run(":9000")
}
