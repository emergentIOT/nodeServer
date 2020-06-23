const express = require('express');
const app = express();

app.listen(3000, () => console.log('listening at 3000'));

//request server to host static dir
app.use(express.static('public'));

//request server to receive json data
app.use(express.json({limit: '1mb'}));

app.post("/api", (req, res) => {

    //receive the object from client side.
    console.log(req.body);
    const data = req.body;
    //complete the request , send response back.
    res.json({
        status: "success",
        latitude: data.lat,
        longitude: data.long
    });
});

//Save to database

//Authentication