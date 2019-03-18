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
addData();

//Function that adds test data to database
function addData(){
    //Build SQL query
    var sql = "INSERT INTO employees (Name, Address, Telephone, Email) " +
        "       VALUES ('Wendy Adams', '9 Rose Street, London', '224636345', 'wendy@mail.com')";

    //Execute the query
    con.query(sql, function (err, result) {

        //Check for errors
        if (err) throw err;

        //Output results
        console.log(result.affectedRows + ' rows updated. ID is ' + result.insertId);
    });
}

//Close the connection
con.end();


