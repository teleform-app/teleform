package db

import (
	"context"
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
	collectionUsers = DB.Collection("users")
}
