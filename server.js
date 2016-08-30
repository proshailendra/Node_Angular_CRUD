var express = require("express"),
    bodyParser = require("body-parser"),
    apiRoutes = require("./server/routes/apiRoutes.js");

var app = express();
//application/json
app.use(bodyParser.json());
//www-form-urlencoded-data
app.use(bodyParser.urlencoded({ extended: false }));

//static files
app.use(express.static("./app"));
app.use(express.static("./bower_components"));

app.use("/api", apiRoutes);
var port = process.env.port || 3000;
app.listen(port, function() {
    console.log('App is running on http://localhost:' + port);
});