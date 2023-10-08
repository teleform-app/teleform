package model

import (
	"github.com/google/uuid"
	"time"
)

type Response struct {
	ID uuid.UUID `json:"id" bson:"_id,omitempty"`

	FormID uuid.UUID `json:"form_id" bson:"form_id"`

	UserID int64 `json:"user" bson:"user"`

	SubmittedAt time.Time `json:"submitted_at" bson:"submitted_at"`

	Answers []Answer `json:"answers" bson:"answers"`
}

type Answer struct {
	QuestionID uuid.UUID `json:"question_id" bson:"question_id"`

	Content []string `json:"content" bson:"content"`
}
