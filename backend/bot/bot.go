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

	go func() {
		defer bot.StopLongPolling()

		updates, err := bot.UpdatesViaLongPolling(nil)
		if err != nil {
			panic(err)
		}

		for update := range updates {
			go processUpdate(update)
		}
	}()

	log.Println("[bot] Started")
}

func processUpdate(update telego.Update) {
	switch {
	case update.Message != nil:
		processMessage(update.Message)
	}
}

func processMessage(message *telego.Message) {
	log.Printf("[bot] Received message: %s", message.Text)

	_, err := bot.SendMessage(&telego.SendMessageParams{
		ChatID: telego.ChatID{
			ID: message.Chat.ID,
		},

		Text:      "📊 Hi! I can help you to create forms. Just [open my app](https://t.me/teleformappbot/form)!",
		ParseMode: "Markdown",
	})

	if err != nil {
		log.Printf("[bot] Error while sending message: %s", err.Error())
	}
}
