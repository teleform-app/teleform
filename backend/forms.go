package main

import (
	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
)

func init() {
	api.GET("/getForm", getForm)
}

func getForm(c *gin.Context) {
	formID, err := uuid.Parse(c.Query("form_id"))
	if err != nil {
		c.JSON(400, gin.H{"error": "invalid form id"})
		return
	}

	c.JSON(200, gin.H{"form": formID})
}
