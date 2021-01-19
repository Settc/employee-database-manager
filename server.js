const mysql = require("mysql")
const inquirer = require("inquirer")
const cTable = require("console.table")
let NULL = null

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "seasaltcarameltruffle",
    database: "employeeTracker_db"
  });
  
connection.connect(function(err) 
{
    if (err) throw err
    startPrompts()
}) 

//Begin prompt
function startPrompts()
{
    inquirer.prompt
    ({
        name: "firstPrompt",
        type: "list",
        message: "Please make a selection:",
        choices: ["Add depts/roles/employees", 
        "View depts/roles/employees", "Update roles",
        "Update managers", "View employees by manager", 
        "Delete depts/roles/employees", "View budget", "EXIT"]
    })
    .then(function(answer)
    {
        switch(answer.firstPrompt) 
        {
            case "Add depts/roles/employees":
                add()
                break
            case "View depts/roles/employees":
                viewAll()
                break
            case "Update roles":
                updateRoles()
                break
            case "Update managers":
                updateManagers()
                break
            case "View employees by manager":
                viewByManager()
                break
            case "Delete depts/roles/employees":
                deleteAny()
                break
            case "View budget":
                budget()
                break
            case "EXIT":
                connection.end()
                
        }
    }
    )
}

function add() {
    inquirer
        .prompt({
        name: "addChoice",
        type: "list",
        message: "Would you like to add a role, department, or employee?",
        choices: ["Role", "Department", "Employee", "Main Menu"]
    }).then(function (answer) {
        switch (answer.addChoice) {
            case "Role":
                
                inquirer.prompt([
                    {
                    name:"title",
                    type:"input",
                    message:"What is the title of this role?"
                    },
                    {
                    name:"salary",
                    type: "input",
                    message: "What is the salary of the role?"
                    },
                    {
                    name:"deptId",
                    type:"input",
                    message:"What is the department ID?",
                    }                    
                    ]).then(function (answer) {
                        connection.query(
                            "INSERT INTO role SET ?",
                            {
                               title: answer.title ,
                               salary: answer.salary,
                               department_id: answer.deptId
                            },
                            function(err) {
                                if (err) throw err;
                                console.log("Role created.")
                                add()
                            }
                        )
                    })
                
                break
            
            case "Department":
                inquirer.prompt([
                    {
                    name:"name",
                    type:"input",
                    message:"What is the name of this department?"
                    }
                    ]).then(function (answer) {
                        connection.query(
                            "INSERT INTO department SET ?",
                            {
                               name: answer.name                                
                            },
                            function(err) {
                                if (err) throw err;
                                console.log("Department created.")
                                add()
                            }
                        )
                    })
                break

            case "Employee":
                inquirer.prompt([
                    {
                    name:"firstName",
                    type:"input",
                    message:"What is the first name of this employee?"
                    },
                    {
                    name:"lastName",
                    type: "input",
                    message: "What is the last name of this employee?"
                    },
                    {
                    name:"roleId",
                    type:"input",
                    message:"What is the role ID?",
                    },
                    {
                    name: "managerId",
                    type: "input",
                    message: "What is the manager ID"
                    }
                    ]).then(function (answer) {

                        if (!answer.roleId || answer.roleId === 0 ) {
                            console.log("You need a role ID")
                            add()
                        }   else if (!answer.managerId || answer.managerId < 1 ) {
                            answer.managerId = NULL
                            
                        }   
                        connection.query(
                            "INSERT INTO employee SET ?",
                            {
                               first_name: answer.firstName,
                               last_name: answer.lastName,
                               role_id: answer.roleId,
                               manager_id: answer.managerId
                            },
                            function(err) {
                                if (err) throw err;
                                console.log("Employee created.")
                                startPrompts()
                            }
                        
                        )
                    })
                
                break

                case "Main Menu":
                    startPrompts()
                break
        }
    })
}


function viewAll() {
    console.log("View all")
    connection.end()
    
}
// function add() {
//     console.log("Add")
// }
// function add() {
//     console.log("Add")
// }
// function add() {
//     console.log("Add")
// }
// function add() {
//     console.log("Add")
// }
// function add() {
//     console.log("Add")
// }

//Add departments, roles, employees
//View departments, roles, employees
//Update employee roles
//Update employee managers
//View employees by manager
//Delete departments, roles, and employees
//View combined salaries for all employees
