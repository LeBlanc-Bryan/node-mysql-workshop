var mysql = require('mysql');
var colors = require('colors');
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'leblancbryan',
    password : '',
    database : 'addressbook'
});

var query = `
SELECT id, email
from Account
limit 5`;

connection.query(query, function(err, rows, fields) {
    if (err) {
        console.log("U dun fucked up now!");
    }
        rows.forEach(function(row) {
            console.log((("#"+ JSON.stringify(row.id)) + ": ").bold + (row.email));
        });
        connection.end();
});
