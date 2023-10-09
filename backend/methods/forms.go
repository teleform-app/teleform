package methods

import (
	initdata "github.com/Telegram-Web-Apps/init-data-golang"
	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
	"net/http"
	"teleform/db"
	"teleform/model"
	"teleform/utils"
	"time"
)

func GetForm(c *gin.Context) {
	formID, err := uuid.Parse(c.Query("form_id"))
	if err != nil {
		c.JSON(400, gin.H{"error": "invalid form id"})
		return
	}

	form, err := db.GetForm(formID)
	if err != nil {
		c.JSON(500, gin.H{"error": "internal server error"})
		return
	}

	if form == nil {
		c.JSON(404, gin.H{"error": "no such form"})
	} else {
		c.JSON(200, gin.H{"form": form})
	}
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

func CreateForm(c *gin.Context) {
	var body struct {
		Title string `json:"title" binding:"required" validate:"min=1,max=100"`
	}

	if err := c.ShouldBindJSON(&body); err != nil {
		c.JSON(400, gin.H{"error": "invalid body"})
		return
	}

	initData := c.MustGet("init_data").(*initdata.InitData)

	form := model.Form{
		ID:        uuid.New(),
		Author:    initData.User.ID,
		Emoji:     utils.RandomEmoji(),
		Title:     body.Title,
		CreatedAt: time.Now(),
		Questions: make([]model.Question, 0),
	}

	if err := db.UpsertForm(&form); err != nil {
		c.JSON(500, gin.H{"error": "internal server error"})
		return
	}

	c.JSON(200, gin.H{"form": form})
}

func EditForm(c *gin.Context) {
	var body struct {
		FormID    uuid.UUID        `json:"form_id" binding:"required"`
		Questions []model.Question `json:"questions" binding:"required" validate:"max=100"`
	}

	if err := c.ShouldBindJSON(&body); err != nil {
		c.JSON(400, gin.H{"error": "invalid body"})
		return
	}

	initData := c.MustGet("init_data").(*initdata.InitData)

	form, err := db.GetForm(body.FormID)
	if err != nil {
		c.JSON(500, gin.H{"error": "internal server error"})
		return
	} else if form == nil {
		c.JSON(404, gin.H{"error": "no such form"})
		return
	}

	if form.Author != initData.User.ID {
		c.JSON(403, gin.H{"error": "you are not the author of this form"})
		return
	}

	form.Questions = body.Questions

	if err := db.UpsertForm(form); err != nil {
		c.JSON(500, gin.H{"error": "internal server error"})
		return
	}

	c.JSON(http.StatusOK, initData)
}
