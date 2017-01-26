var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'leblancbryan',
  password : '',
  database : 'addressbook'
});

connection.query("show databases", function(err, result) {
  if(err) {
    console.log("I got a bad feeling about this.");
  }
    console.log(JSON.stringify(result)); 
});

