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
selectData();

//Function that adds test data to database
function selectData(){
    //Build SQL query to select all employees
    var sql = "SELECT * FROM employees";

    //Execute the query
    con.query(sql, function (err, result) {

        //Check for errors
        if (err) throw err;

        //Output results in JSON format - a web service would return this string.
        console.log(JSON.stringify(result));

        //Work through results
        result.forEach(function (employee) {
            console.log("--------- EMPLOYEE ----------");
            console.log("ID: " + employee.ID);
            console.log("Name: " + employee.Name);
            console.log("Address: " + employee.Address);
            console.log("Telephone: " + employee.Telephone);
            console.log("Email: " + employee.Email);
            console.log();
        });
    });
}

//Close the connection
con.end();
