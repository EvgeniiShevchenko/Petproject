const Mongo = require("mongodb-stitch-server-sdk");
// import {
//     Stitch,
//     AnonymousCredential,
//     RemoteMongoClient
//   } from "mongodb-stitch-server-sdk";

const appId = "app-gzhil";
const client = Mongo.Stitch.initializeDefaultAppClient(appId);
const mongodb = client.getServiceClient(Mongo.RemoteMongoClient.factory,"mongodb-atlas");
const db = mongodb.db("firstApp");
const count = db.collection("counters");
module.exports = count;
module.exports = appId;
module.exports = mongodb;
module.exports = db;
// module.exports = mongodb;
// module.exports = db;



// const initmongo =  {
//     mongodb,
//     db
// }
// export default initmongo;

// const {
//     Stitch, 
//     AnonymousCredential,
//     RemoteMongoClient
// } = require('mongodb-stitch-server-sdk');

// const client = Stitch.initializeDefaultAppClient('app-gzhil');
// const mongodb = client.getServiceClient(RemoteMongoClient.factory,"mongodb-atlas");
// const db = mongodb.db("firstApp");
// const count = db.collection("counters");

// client.auth.loginWithCredential(new AnonymousCredential()).then(user => {
//     console.log(user);
//     client.close();
// }).catch(err => {
//     console.log(err);
//     client.close();
// })