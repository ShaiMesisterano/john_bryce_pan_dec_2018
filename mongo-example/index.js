const express = require('express');
const mongo = require('mongodb');
const bodyParser = require('body-parser');

const MongoClient = mongo.MongoClient;
const dbUrl = 'mongodb://127.0.0.1:27017';

const app = express();

app.use('/', bodyParser.json());

MongoClient.connect(dbUrl, function (error, db) {

    if (error) {
        console.log('ERROR', error);
        return;
    }

    const recipeDb = db.db('recipe');
    const collection = recipeDb.collection('favorites');

    app.get('/', function (req, res) {
        collection.find({}).toArray(function (error, result) {
            if (error) {
                console.log("ERROR", error);
                return;
            }
            console.log("RESULT", result);
            res.send(JSON.stringify(result, null, 4));
        });
    });

    app.post('/', function (req, res) {
        const name = req.body.name;
        const ingredients = req.body.ingredients;
        const bakeTime = req.body.bakeTime;
        collection.insertOne({ name, ingredients, bakeTime });
        res.end('added successfulyl');
    });

    app.delete('/', function (req, res) {
        const name = req.body.name;
        collection.deleteOne({ name });
        res.end('removed successfulyl');
    });

    app.put('/', function (req, res) {
        const name = req.body.name;
        const newName = req.body.newName;
        const newIngredients = req.body.newIngredients;
        const newBakeTime = req.body.newBakeTime;
        collection.updateOne({ name }, { $set: { name: newName, ingredients: newIngredients, bakeTime: newBakeTime } })
        res.end('updated successfulyl');
    });
});

// app.listen(3000, () => console.log("Server is listening on port 3000"));
module.exports = app;