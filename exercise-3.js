var mysql = require('mysql');
var colors = require('colors');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'leblancbryan',
    password: '',
    database: 'addressbook'
});

var query = `
SELECT Account.id, Account.email, AddressBook.name 
FROM Account 
JOIN AddressBook
ON AddressBook.accountId = Account.id
`;

connection.query(query, function(err, rows, fields) {
  
  if(err) {
    console.log("Something terrible has happened.");
  }
   
    rows.forEach(function(currentValue, i, array) {
      
      if(i === 0 || currentValue.email != array[i-1].email) {
        console.log('\n' + ('#' + currentValue.id).bold +': ' + currentValue.email.blue);
      }
      console.log(currentValue.name.red);
  });
  connection.end();
}); 
