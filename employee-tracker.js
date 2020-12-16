const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");
const { allowedNodeEnvironmentFlags } = require("process");
// connect info for sql database
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "employee_tracker_db",
});

// function which prompts user what action to take add view update
const start = () => {
    inquirer.prompt({
        type: "list",
        name: "start",
        message: "What do you want to do?",
        choices: ["ADD", "VIEW", "UPDATE", "EXIT"],
    })
        .then((res) => {
            // based on answer will call certain functions
            if (res.start === "ADD") {
                add();
            } else if (res.start === "VIEW") {
                view();
            } else if (res.start === "UPDATE") {
                update();
            } else {
                connection.end();
                process.exit(0);
            }
        });
};

// function handling add either departments, roles, employees
const add = () => {
    inquirer.prompt({
        type: "list",
        name: "add",
        message: "What would you like to add?",
        choices: ["DEPARTMENTS", "ROLES", "EMPLOYEES"],
    })
        .then((res) => {
            // based on answer will call certain functions
            if (res.add === "DEPARTMENTS") {
                addDepartment();
            } else if (res.add === "ROLES") {
                addRole();
            } else if (res.add === "EMPLOYEES") {
                addEmployees();
            }
        });
};

// function adding department questions
const addDepartment = () => {
    inquirer.prompt({
        type: "input",
        name: "departmentName"
    })
        .then((res) => {
            // after user answers this, insert a new departent in the database with info
            connection.query(
                'INSERT INTO department SET ?',
                { name: res.departmentName },
                (err) => {
                    if (err) throw err;
                    console.log("Department successfully created.");
                    // re-prompt the user back to the beginning
                    start();
                }
            );
        });
};
// functions for adding role
const addRole = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is their title?"
        },
        {
            type: "input",
            name: "salary",
            message: "What is their salary?"
        },
        {
            type: "input",
            name: "departmentId",
            message: "What is thier department ID?"
        }
    ])
        .then((res) => {
            // after user answers this, insert a new departent in the database with info
            connection.query(
                'INSERT INTO role SET ?',
                { 
                    title: res.title,
                    salary: res.salary,
                    department_id: res.departmentID
                },
                (err) => {
                    if (err) throw err;
                    console.log("Role successfully created.");
                    // re-prompt the user back to the beginning
                    start();
                }
            );
        });
}
start();