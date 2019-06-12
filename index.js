"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

// import count from "../mongo_config";
// const Mongo = require("mongodb-stitch-server-sdk");
var express = require("express");

var path = require('path');

var anime = require('./routes/api/anime'); // import {Stitch, AnonymousCredential, RemoteMongoClient} from "mongodb-stitch-server-sdk";
// const appId = "app-gzhil";
// const client = Mongo.Stitch.initializeDefaultAppClient(appId);
// const mongodb = client.getServiceClient(Mongo.RemoteMongoClient.factory,"mongodb-atlas");
// const db = mongodb.db("firstApp");
// const collection = db.collection("Anime");
// console.log("logging in anonymously");
// client.auth.loginWithCredential(new Mongo.AnonymousCredential()).then(user => {
//   console.log(`logged in anonymously as user ${user.id}`)
// });
// const db = require("./mongo_config");
// import db from "./mongo_config";


var app = express(); // const dev = app.get('env') !== 'production';
// if(!dev){
//     app.disable('x-powered-by');
//     app.use(compression());
//     app.use(morgan('common'));
// }
// app.use("/index", php.cgi(path.resolve(__dirname, "dayside-master",  "index.php"))); 

app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: true
})); // app.use(cors());

app.use((0, _morgan["default"])('dev'));
app.use("/api/anime", anime); // app.get('/', (req, res) => {
//     res.send('Root route of server');
//   });

if (process.env.NODE_ENV === 'production') {
  app.use(express["static"](path.join(__dirname, "client", "build")));
  app.get("*", function (req, res) {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

var port = process.env.PORT || 5000;
app.listen(port, function () {
  return console.log("Mixing it up on port ".concat(port));
});