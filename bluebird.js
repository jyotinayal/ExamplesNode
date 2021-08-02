var Promise = require('bluebird');

var mongoClient = Promise.promisifyAll(require('mongodb')).MongoClient;

var url = 'mongodb://localhost/EmployeeDB';
mongoClient.connectAsync('mongodb://localhost/EmployeeDB')

.then(function(db) {
        return db.collection('Employee').findAsync({})

    })
    .then(function(cursor) {
        cursor.each(function(err, doc) {
            console.log(doc);
        })
    });

    //Error