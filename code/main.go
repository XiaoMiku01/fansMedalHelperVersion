package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()
	router.GET("/", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"version":   "0.3.7",
			"changelog": "修复：点赞失败 ，  \n更新方法见文档：doc.loveava.top/ 若更新失败 尝试重新部署 \n",
			"notice":    "",
		})
	})
	router.Run(":9000")
}
