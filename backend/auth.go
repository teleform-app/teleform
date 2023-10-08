package main

import (
	"fmt"
	initdata "github.com/Telegram-Web-Apps/init-data-golang"
	"github.com/gin-gonic/gin"
	"os"
	"time"
)

var botToken = os.Getenv("BOT_TOKEN")

func twaAuthMiddleware(c *gin.Context) {
	// Raw init data from the request header (https://docs.twa.dev/docs/launch-params/init-data).
	initData := c.GetHeader("X-Init-Data")

	if initData == "" {
		c.JSON(400, gin.H{"error": "please pass signed init data in the X-Init-Data header"})
		c.Abort()
		return
	}

	// How long the init data is valid
	expIn := 24 * time.Hour

	if err := initdata.Validate(initData, botToken, expIn); err != nil {
		c.JSON(400, gin.H{"error": fmt.Sprintf("can't validate init data: %s", err.Error())})
		return
	}

	data, err := initdata.Parse(initData)
	if err != nil {
		c.JSON(400, gin.H{"error": fmt.Sprintf("can't parse init data: %s", err.Error())})
		return
	}

	c.Set("init_data", data)
}
