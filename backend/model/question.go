package model

import "github.com/google/uuid"

type QuestionType string

type Question struct {
	ID uuid.UUID `json:"id" bson:"_id,omitempty"`

	Type string `json:"type" bson:"type"`

	Mandatory bool `json:"mandatory" bson:"mandatory"`

	Content map[string]interface{} `json:"content" bson:"content"`
}

func (q *Question) GetText() string {
	t, _ := q.Content["text"].(string)
	return t
}
