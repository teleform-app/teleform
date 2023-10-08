package db

import (
	"context"
	"errors"
	"github.com/google/uuid"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
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
	var forms = make([]model.Form, 0)

	cursor, err := collectionForms.Find(context.Background(), bson.D{{"author", id}})
	if err != nil {
		return nil, err
	}

	if err := cursor.All(context.Background(), &forms); err != nil {
		return nil, err
	}

	return forms, nil
}

func UpsertForm(form *model.Form) error {
	_, err := collectionForms.UpdateOne(context.Background(), bson.D{{"_id", form.ID}}, bson.D{{"$set", form}}, options.Update().SetUpsert(true))
	return err
}
