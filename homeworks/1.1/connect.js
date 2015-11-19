var mongodb = require('mongodb');
var uri = 'mongodb://edx-mongo:27017/movies';

module.exports = function(callback) {
  mongodb.MongoClient.connect(uri, callback);
};