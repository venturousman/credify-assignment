const mongoose = require('mongoose')
const { DATABASE_URL } = require('../config/mongodb');

module.exports = async () => {
    const connection = await mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useCreateIndex: true });
    return connection.connection.db;
};