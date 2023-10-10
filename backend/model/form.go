package model

import (
	"github.com/google/uuid"
	"time"
)

type Form struct {
	ID uuid.UUID `json:"id" bson:"_id,omitempty"`

	Author int64 `json:"author" bson:"author"`

	Emoji string `json:"emoji" bson:"emoji"`
	Title string `json:"title" bson:"title"`

	Responses int64 `json:"response" bson:"response"`

	CreatedAt time.Time `json:"created_at" bson:"created_at"`

	Questions []Question `json:"questions" bson:"questions"`
}
