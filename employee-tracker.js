const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");
// connect info for sql database
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "vince",
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

start();