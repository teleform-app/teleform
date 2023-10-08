package model

import "github.com/google/uuid"

type QuestionType string

type Question struct {
	ID uuid.UUID `json:"id" bson:"_id,omitempty"`

	Type string `json:"type" bson:"type"`

	Mandatory bool `json:"mandatory" bson:"mandatory"`

	Content any `json:"content" bson:"content"`
}

const QuestionTypeRegularInput QuestionType = "regular_input"

type QuestionContentRegularInput struct {
	Text        string `json:"question" bson:"question"`
	Placeholder string `json:"placeholder" bson:"placeholder"`
}

const QuestionTypeSelector QuestionType = "selector"

type QuestionContentSelector struct {
	Text        string   `json:"question" bson:"question"`
	Multichoice bool     `json:"multichoice" bson:"multichoice"`
	Options     []string `json:"options" bson:"options"`
}
