"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _bson = require("bson");

var _mongodbStitchServerSdk = require("mongodb-stitch-server-sdk");

// const express = require('../../node_modules/express')
// import express from "express";
// const router = express.Router();
// import {Router} from "express";
// const Mongo = require("mongodb-stitch-server-sdk");
var express = require('express');

var router = express.Router();
var appId = "app-gzhil";

var client = _mongodbStitchServerSdk.Stitch.initializeDefaultAppClient(appId);

var mongodb = client.getServiceClient(_mongodbStitchServerSdk.RemoteMongoClient.factory, "mongodb-atlas");
var db = mongodb.db("firstApp");
var collection = db.collection("Anime");
console.log("logging in anonymously");
client.auth.loginWithCredential(new _mongodbStitchServerSdk.AnonymousCredential()).then(function (user) {
  console.log("logged in anonymously as user ".concat(user.id));
}); // @route   api/anime/
// @desc    getting anime post

router.get("/", function (req, res) {
  var getdata =
  /*#__PURE__*/
  function () {
    var _ref = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee() {
      var countlogin;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return collection.find({}).asArray();

            case 2:
              countlogin = _context.sent;
              console.log(countlogin);
              res.send(countlogin);
              console.log("hello");

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getdata() {
      return _ref.apply(this, arguments);
    };
  }();

  getdata();
}); // @route   api/anime/add-anime
// @desc    adding anime post

router.post("/add-anime", function (req, res) {
  var getdata =
  /*#__PURE__*/
  function () {
    var _ref2 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee2() {
      var employeeName, countlogin;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              employeeName = req.body;
              console.log(employeeName);
              _context2.next = 4;
              return collection.insertOne(employeeName);

            case 4:
              countlogin = _context2.sent;
              res.send(countlogin);
              console.log("hello");

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function getdata() {
      return _ref2.apply(this, arguments);
    };
  }();

  getdata();
}); // @route   api/anime/delete/:id
// @desc    deleting anime from database

router["delete"]("/delete/:id", function (req, res) {
  var getdata =
  /*#__PURE__*/
  function () {
    var _ref3 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee3() {
      var id, fff, deleteanime;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              id = new _bson.ObjectId(req.params.id); // const id = new req.params.id;

              fff = (0, _typeof2["default"])(id); // const employeeName = req.body;

              console.log(id);
              _context3.next = 5;
              return collection.deleteOne({
                _id: id
              });

            case 5:
              deleteanime = _context3.sent;
              res.send("".concat(id, "  ").concat(fff));
              console.log(deleteanime);

            case 8:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function getdata() {
      return _ref3.apply(this, arguments);
    };
  }();

  getdata();
}); // @route   api/anime/update/:id
// @desc    updating anime from database

router.put("/update/:id", function (req, res) {
  var getdata =
  /*#__PURE__*/
  function () {
    var _ref4 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee4() {
      var id, animetitle, updateeanime;
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              id = new _bson.ObjectId(req.params.id); // const animetitle = req.body;
              // const animetitle = req.body;

              animetitle = {
                "Year": 3000,
                "Status": "Жопинг"
              }; // const employeeName = req.body;

              console.log(id);
              _context4.next = 5;
              return collection.updateOne({
                _id: id
              }, {
                $set: animetitle
              });

            case 5:
              updateeanime = _context4.sent;
              res.send("".concat(id, " ").concat(JSON.stringify(updateeanime)));
              console.log(updateeanime);

            case 8:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function getdata() {
      return _ref4.apply(this, arguments);
    };
  }();

  getdata();
}); // /api/

module.exports = router;