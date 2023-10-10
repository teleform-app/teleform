package bot

import (
	"bytes"
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

type fakeFile struct {
	*bytes.Reader
	name string
}

func (f fakeFile) Name() string {
	return f.name
}

func SendFile(targetUserID int64, name string, data []byte) {
	_, err := bot.SendDocument(&telego.SendDocumentParams{
		ChatID: telego.ChatID{
			ID: targetUserID,
		},
		Document: telego.InputFile{
			File: fakeFile{
				Reader: bytes.NewReader(data),
				name:   name,
			},
		},
	})

	if err != nil {
		log.Printf("[bot] Error while sending message: %s", err.Error())
	}
}
