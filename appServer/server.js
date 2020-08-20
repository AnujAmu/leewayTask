const Express = require("express");
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;

const CONNECTION_URL = "mongodb+srv://AnujAmu:Anuj12345@my-cluster.9s2sm.mongodb.net/mydb?retryWrites=true&w=majority";
const DATABASE_NAME = "mydb";

var app = Express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

var database, collection;

app.listen(4000, () => {
    MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
        if (error) {
            throw error;
        }
        database = client.db(DATABASE_NAME);
        collection = database.collection("people");
        console.log("Connected to `" + DATABASE_NAME + "`!");
    });
});

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post("/person", (request, response) => {
    collection.insertOne(request.body, (error, result) => {
        if (error) {
            return response.status(500).send(error);
        }
        response.send(result.result);

    });
});

app.get("/people", (request, response) => {
    collection.find({}).toArray((error, result) => {
        if (error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});