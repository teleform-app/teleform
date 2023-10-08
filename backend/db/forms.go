package db

import (
	"context"
	"errors"
	"github.com/google/uuid"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"teleform/model"
)

var collectionForms *mongo.Collection

func GetForm(id uuid.UUID) (*model.Form, error) {
	var form model.Form

	err := collectionForms.FindOne(context.Background(), bson.D{{"_id", id[:]}}).Decode(&form)
	switch {
	case err == nil:
		return &form, nil
	case errors.Is(err, mongo.ErrNoDocuments):
		return nil, nil
	default:
		return nil, err
	}
}

func GetFormsByUser(id int64) ([]model.Form, error) {
	var forms []model.Form

	cursor, err := collectionForms.Find(context.Background(), bson.D{{"author", id}})
	if err != nil {
		return nil, err
	}

	if err := cursor.All(context.Background(), &forms); err != nil {
		return nil, err
	}

	return forms, nil
}
