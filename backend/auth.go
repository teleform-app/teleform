package main

import (
	"fmt"
	initdata "github.com/Telegram-Web-Apps/init-data-golang"
	"github.com/gin-gonic/gin"
	"os"
	"teleform/db"
	"teleform/model"
	"time"
)

var botToken = os.Getenv("TELEGRAM_BOT_TOKEN")
var skipValidation = os.Getenv("SKIP_VALIDATION") == "true"

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

	if !skipValidation {
		if err := initdata.Validate(initData, botToken, expIn); err != nil {
			c.JSON(400, gin.H{"error": fmt.Sprintf("can't validate init data: %s", err.Error())})
			c.Abort()
			return
		}
	}

	data, err := initdata.Parse(initData)
	if err != nil {
		c.JSON(400, gin.H{"error": fmt.Sprintf("can't parse init data: %s", err.Error())})
		c.Abort()
		return
	}

	if err := db.UpsertUser(&model.User{User: data.User}); err != nil {
		c.JSON(500, gin.H{"error": fmt.Sprintf("can't upsert user: %s", err.Error())})
		c.Abort()
		return
	}

	c.Set("init_data", data)
}
