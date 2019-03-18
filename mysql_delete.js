//Import the mysql module
var mysql = require('mysql');

//Create a connection object with the user details
var con = mysql.createConnection({
    host: "localhost",
    user: "daog",
    password: "123456",
    database: "mywebsite"
});

//Connect to the database
con.connect(
    //This function is called when the connection is attempted
    function(err) {
        if (err) throw err;//Check for errors

        //Output results
        console.log("Connected!");
    }
);

//Call function that inserts some data into the database
deleteData();

//Function that adds test data to database
function deleteData(){
    //Build SQL query
    var sql = "DELETE FROM employees WHERE ID=12";

    //Execute the query
    con.query(sql, function (err, result) {

        //Check for errors
        if (err) throw err;

        //Output results
        console.log(result.affectedRows + ' rows deleted.');
    });
}

//Close the connection
con.end();
