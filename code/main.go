package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()
	router.GET("/", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"version":   "0.3.2",
			"changelog": "\n\n自动完成每日观看30分钟任务\n\n高度自定义的用户配置（详细看users.yaml文件）\n\n更加详细的微信推送通知（今日亲密度具体获取情况）\n\n修复BUG",
			"notice":    "",
		})
	})
	router.Run(":9000")
}
