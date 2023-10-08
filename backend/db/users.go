package db

import (
	"context"
	"errors"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
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

func UpsertUser(user *model.User) error {
	_, err := collectionUsers.UpdateOne(context.Background(), bson.D{{"_id", user.ID}}, bson.D{{"$set", user}}, options.Update().SetUpsert(true))
	return err
}
