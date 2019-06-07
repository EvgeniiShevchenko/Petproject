"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _bson = require("bson");

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _os = require("os");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import count from "../mongo_config";
var Mongo = require("mongodb-stitch-server-sdk");

var express = require("express");

var path = require('path');
// import {Stitch, AnonymousCredential, RemoteMongoClient} from "mongodb-stitch-server-sdk";

var appId = "app-gzhil";
var client = Mongo.Stitch.initializeDefaultAppClient(appId);
var mongodb = client.getServiceClient(Mongo.RemoteMongoClient.factory, "mongodb-atlas");
var db = mongodb.db("firstApp");
var collection = db.collection("Anime");

// const db = require("./mongo_config");
// import db from "./mongo_config";
var app = express();

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));

app.get("https://serene-cliffs-20808.herokuapp.com", function (req, res) {
    var getdata = async function getdata() {
        var countlogin = await collection.find({}).asArray();
        console.log(countlogin);
        res.send([{ "_id": { "$oid": "5cf833686f986ae1d53aa765" }, "Name": "Созерцая колготки", "Img": "https://smotretanime.ru/posters/20434.27713357813.jpg", "Year": { "$numberInt": "2019" }, "Status": "онгоинг", "NumOfSeries": { "$numberInt": "12" }, "Rating": null, "Studio": "Yokohama Animation Lab", "Director": "Огава Юки", "Description": "Дождливое апрельское утро. Вишневые цветы поражены дождем и плавают в луже. Старшеклассники входят в школьные ворота, неся зонтики разных цветов. «Доброе утро, Рен», - поприветствовала Юа Рен, надев мокрые колготки перед шкафом с обувью. Когда Рен угрюмо взглянула на нее, Хоми, залитая водой, присоединилась к ним. Девушки обсуждают новый семестр. Эта история незаменимой школьной жизни трех девушек." }]);
        console.log("hello");
    };
    getdata();
});

app.post("/api/create-anime", function (req, res) {
    var getdata = async function getdata() {
        var employeeName = req.body;
        console.log(employeeName);
        var countlogin = await collection.insertOne(employeeName);
        res.send(countlogin);
        console.log("hello");
    };
    getdata();
});

app.delete("/api/delete/:id", function (req, res) {
    var getdata = async function getdata() {
        var id = new _bson.ObjectId(req.params.id);
        var fff = typeof id === "undefined" ? "undefined" : _typeof(id);
        // const employeeName = req.body;
        console.log(id);
        var deleteanime = await collection.deleteOne({ _id: id });
        res.send(id + " " + JSON.stringify(deleteanime) + " " + fff);
        console.log(deleteanime);
    };
    getdata();
});

app.post("/api/update/:id", function (req, res) {
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
        res.send(id + " " + JSON.stringify(updateeanime));
        console.log(updateeanime);
    };
    getdata();
});
// /api/
app.get("/bay", function (req, res) {
    return res.send(console.log("bay"));
});

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, "client", "build")));
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "client", "build", "index.html"));
    });
}

var port = process.env.PORT || 3001;
app.listen(port, console.log("Server runing on " + port + " port!"));
