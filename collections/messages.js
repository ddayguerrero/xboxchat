Messages = new Mongo.Collection("messages");
Messages.insert({greeting: "hello"}, function(){});