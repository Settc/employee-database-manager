const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("")

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "seasaltcarameltruffle",
    database: "employeeTracker_db"
  });
  
connection.connect(function(err) 
{
    if (err) throw err;
    startPrompts();
}) 

function startPrompts()
{
    inquirer.prompt
    ({
        name:
    })
}