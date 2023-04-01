const mongoose = require("mongoose");

require('dotenv').config()

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = process.env.MONGODB_URI;
db.appointments = require("./models.js")(mongoose);

module.exports = db;
