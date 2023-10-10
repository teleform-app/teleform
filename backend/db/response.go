package db

import (
	"context"
	"github.com/google/uuid"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"teleform/model"
)

var collectionResponses *mongo.Collection

func InsertResponse(response model.Response) error {
	_, err := collectionResponses.InsertOne(context.Background(), response)
	return err
}

func GetResponsesByForm(id uuid.UUID) ([]model.Response, error) {
	var responses = make([]model.Response, 0)

	cursor, err := collectionResponses.Find(context.Background(), bson.D{{"form_id", id}}, options.Find().SetSort(bson.D{{"submitted_at", 1}}))
	if err != nil {
		return nil, err
	}

	if err := cursor.All(context.Background(), &responses); err != nil {
		return nil, err
	}

	return responses, nil
}

func CountResponsesByForm(id uuid.UUID) int64 {
	cc, _ := collectionResponses.CountDocuments(context.Background(), bson.D{{"form_id", id}})
	return cc
}
