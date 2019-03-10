const express = require('express')
const morgan = require('morgan')

// database
const mysql = require('mysql')

// setting up the database 
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodejs_db"
})


db.connect()

modeule.exports = connection;

