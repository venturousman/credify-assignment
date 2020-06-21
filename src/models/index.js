const mongoose = require('mongoose');
const { DATABASE_URL } = require('../config/mongodb');

const db = {};
db.mongoose = mongoose;
db.url = DATABASE_URL;
db.users = require('../models/user')(mongoose);

module.exports = db;