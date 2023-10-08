package db

import (
	"context"
	"errors"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"teleform/model"
)

var collectionUsers *mongo.Collection

func init() {
	collectionUsers = DB.Collection("users")
}

func GetUser(id int) (*model.User, error) {
	var user model.User

	err := collectionUsers.FindOne(context.Background(), bson.D{{"_id", id}}).Decode(&user)
	switch {
	case err == nil:
		return &user, nil
	case errors.Is(err, mongo.ErrNoDocuments):
		return nil, nil
	default:
		return nil, err
	}
}
