package db

import (
	"context"
	"github.com/google/uuid"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"teleform/model"
)

var collectionResponses *mongo.Collection

func InsertResponse(response model.Response) error {
	_, err := collectionResponses.InsertOne(context.Background(), response)
	return err
}

func GetResponsesByForm(id uuid.UUID) ([]model.Response, error) {
	var responses = make([]model.Response, 0)

	cursor, err := collectionResponses.Find(context.Background(), bson.D{{"form", id}})
	if err != nil {
		return nil, err
	}

	if err := cursor.All(context.Background(), &responses); err != nil {
		return nil, err
	}

	return responses, nil
}
