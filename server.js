"use strict";

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _morgan = require("morgan");

var _morgan2 = _interopRequireDefault(_morgan);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import count from "../mongo_config";
// const Mongo = require("mongodb-stitch-server-sdk");
var express = require("express");

var path = require('path');

var anime = require('./routes/api/anime');

// import {Stitch, AnonymousCredential, RemoteMongoClient} from "mongodb-stitch-server-sdk";

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
var app = express();
// const dev = app.get('env') !== 'production';

// if(!dev){
//     app.disable('x-powered-by');
//     app.use(compression());
//     app.use(morgan('common'));
// }


// app.use("/index", php.cgi(path.resolve(__dirname, "dayside-master",  "index.php"))); 


app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));
// app.use(cors());
app.use((0, _morgan2.default)('dev'));

app.use("/api/anime", anime);

app.get('/', function (req, res) {
    res.send('Root route of server');
});

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, "client", "build")));
    app.get("*", function (req, res) {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

var port = process.env.PORT || 5000;
app.listen(port, function () {
    return console.log("Mixing it up on port " + port);
});
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; // const express = require('../../node_modules/express')
// import express from "express";
// const router = express.Router();
// import {Router} from "express";

// const Mongo = require("mongodb-stitch-server-sdk");


var _bson = require('bson');

var _mongodbStitchServerSdk = require('mongodb-stitch-server-sdk');

var express = require('express');
var router = express.Router();

var appId = "app-gzhil";
var client = _mongodbStitchServerSdk.Stitch.initializeDefaultAppClient(appId);
var mongodb = client.getServiceClient(_mongodbStitchServerSdk.RemoteMongoClient.factory, "mongodb-atlas");
var db = mongodb.db("firstApp");
var collection = db.collection("Anime");
console.log("logging in anonymously");
client.auth.loginWithCredential(new _mongodbStitchServerSdk.AnonymousCredential()).then(function (user) {
    console.log('logged in anonymously as user ' + user.id);
});

// @route   api/anime/
// @desc    getting anime post
router.get("/", function (req, res) {
    var getdata = async function getdata() {
        var countlogin = await collection.find({}).asArray();
        console.log(countlogin);
        res.send(countlogin);
        console.log("hello");
    };
    getdata();
});

// @route   api/anime/add-anime
// @desc    adding anime post
router.post("/add-anime", function (req, res) {
    var getdata = async function getdata() {
        var employeeName = req.body;
        console.log(employeeName);
        var countlogin = await collection.insertOne(employeeName);
        res.send(countlogin);
        console.log("hello");
    };
    getdata();
});

// @route   api/anime/delete/:id
// @desc    deleting anime from database
router.delete("/delete/:id", function (req, res) {
    var getdata = async function getdata() {
        var id = new _bson.ObjectId(req.params.id);
        // const id = new req.params.id;
        var fff = typeof id === 'undefined' ? 'undefined' : _typeof(id);
        // const employeeName = req.body;
        console.log(id);
        var deleteanime = await collection.deleteOne({ _id: id });
        res.send(id + '  ' + fff);
        console.log(deleteanime);
    };
    getdata();
});

// @route   api/anime/update/:id
// @desc    updating anime from database
router.put("/update/:id", function (req, res) {
    var getdata = async function getdata() {
        var id = new _bson.ObjectId(req.params.id);
        // const animetitle = req.body;
        // const animetitle = req.body;
        var animetitle = {
            "Year": 3000,
            "Status": "Жопинг"
        };
        // const employeeName = req.body;
        console.log(id);
        var updateeanime = await collection.updateOne({ _id: id }, { $set: animetitle });
        res.send(id + ' ' + JSON.stringify(updateeanime));
        console.log(updateeanime);
    };
    getdata();
});
// /api/

module.exports = router;
