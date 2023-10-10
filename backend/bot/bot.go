package bot

import (
	"github.com/mymmrac/telego"
	"log"
	"os"
)

var botToken = os.Getenv("TELEGRAM_BOT_TOKEN")

var bot *telego.Bot

func init() {
	var err error

	bot, err = telego.NewBot(botToken)
	if err != nil {
		panic(err)
	}

	defer bot.StopLongPolling()

	updates, _ := bot.UpdatesViaLongPolling(nil)

	// Loop through all updates when they came
	for update := range updates {
		go processUpdate(update)
	}
}

func processUpdate(update telego.Update) {
	switch {
	case update.Message != nil:
		processMessage(update.Message)
	}
}

func processMessage(message *telego.Message) {
	_, err := bot.SendMessage(&telego.SendMessageParams{
		ChatID: telego.ChatID{
			ID: message.Chat.ID,
		},

		Text:                     "Hi! I can help you to create forms. Just open my app!\n\nt.me/teleformappbot/form",
		ParseMode:                "",
		Entities:                 nil,
		DisableWebPagePreview:    false,
		DisableNotification:      false,
		ProtectContent:           false,
		ReplyToMessageID:         0,
		AllowSendingWithoutReply: false,
	})

	if err != nil {
		log.Printf("[bot] Error while sending message: %s", err.Error())
	}
}
