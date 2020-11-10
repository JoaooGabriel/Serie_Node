const mongoose = require('mongoose');

mongoose.createConnection();
mongoose.Promise = global.Promise;

module.exports = mongoose;