package bot

import (
	"fmt"
	"github.com/mymmrac/telego"
	"log"
	"teleform/model"
)

func SendFormCompletionNotification(targetUserID int64, form *model.Form, respondent *model.User) {
	_, err := bot.SendMessage(&telego.SendMessageParams{
		ChatID: telego.ChatID{
			ID: targetUserID,
		},
		Text: fmt.Sprintf("Form %s was completed by %s", form.Title, respondent.FirstName),
	})

	if err != nil {
		log.Printf("[bot] Error while sending message: %s", err.Error())
	}
}
