package model

import "github.com/google/uuid"

type Form struct {
	ID uuid.UUID `json:"id" bson:"_id,omitempty"`

	Author int `json:"author" bson:"author"`

	Headline string `json:"headline" bson:"headline"`

	Questions []Question `json:"questions" bson:"questions"`
}
