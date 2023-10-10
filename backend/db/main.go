package db

import (
	"context"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var DB *mongo.Database

func init() {
	client, err := mongo.Connect(context.Background(), options.Client().ApplyURI("mongodb://db:27017"))
	if err != nil {
		panic(err)
	}

	DB = client.Database("teleform")

	collectionForms = DB.Collection("forms")

	_, err = collectionForms.Indexes().CreateOne(context.Background(), mongo.IndexModel{
		Keys: bson.D{
			{"author", 1},
			{"created_at", -1},
		},
	})
	if err != nil {
		panic(err)
	}

	collectionResponses = DB.Collection("responses")
	_, err = collectionResponses.Indexes().CreateOne(context.Background(), mongo.IndexModel{
		Keys: bson.D{
			{"form_id", 1},
			{"submitted_at", 1},
		},
	})
	if err != nil {
		panic(err)
	}

	collectionUsers = DB.Collection("users")

}
