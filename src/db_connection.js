
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "",
  password: "",
  database: "db_userlab"
});

con.connect((err) => {
    if(err){
      console.log('Error connecting to Db');
      return;
    }
    console.log('Connection established');
});

con.end((err) => {
    // The connection is terminated gracefully
    // Ensures all remaining queries are executed
    // Then sends a quit packet to the MySQL server.
});