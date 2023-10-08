package methods

import (
	initdata "github.com/Telegram-Web-Apps/init-data-golang"
	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
	"teleform/db"
)

func GetForm(c *gin.Context) {
	formID, err := uuid.Parse(c.Query("form_id"))
	if err != nil {
		c.JSON(400, gin.H{"error": "invalid form id"})
		return
	}

	c.JSON(200, gin.H{"form": formID})
}

func GetMyForms(c *gin.Context) {
	initData := c.MustGet("init_data").(*initdata.InitData)

	forms, err := db.GetFormsByUser(initData.User.ID)
	if err != nil {
		c.JSON(500, gin.H{"error": "internal server error"})
		return
	}

	c.JSON(200, gin.H{"forms": forms})
}
