const express = require('express');
const app = express();

// Type 1: In-memory only datastore (no need to load the database)
var Datastore = require('nedb');

app.listen(3000, () => console.log('listening at 3000'));

//request server to host static dir
app.use(express.static('public'));

//request server to receive json data
app.use(express.json({limit: '1mb'}));

const databaseArray = [];

//Adding database i.e. neDb

const database = new Datastore('database.db');

//Will create a database file in local working directory
database.loadDatabase();

//Receiving post request from client side
app.post("/api", (req, res) => {

    //receive the object from client side.
    console.log(req.body);
    const data = req.body;
    //complete the request , send response back.
    databaseArray.push(data);
    console.log(database);
    res.json({
        status: "success",
        latitude: data.lat,
        longitude: data.long
    });
});



//Authentication