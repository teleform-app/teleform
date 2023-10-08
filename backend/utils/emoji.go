package utils

import "math/rand"

func RandomEmoji() string {
	var emojis = []string{
		"💡", "📎", "📋", "📌", "📝", "📄", "📃", "📑", "📊", "📊", "📁", "🗃", "🗄", "🗂", "📇", "🖨",
	}

	return emojis[rand.Intn(len(emojis))]
}
