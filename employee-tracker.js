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

// Connect to the Database
connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}\n`)

});

// function which prompts user what action to take add view update
const start = () => {
    inquirer.prompt({
        type: "list",
        name: "start",
        message: "What do you want to do?",
        choices: ["ADD", "VIEW", "UPDATE", "REMOVE", "EXIT"],
    })
        .then((res) => {
            // based on answer will call certain functions
            if (res.start === "ADD") {
                add();
            } else if (res.start === "VIEW") {
                view();
            } else if (res.start === "UPDATE") {
                update();
            } else if (res.start === "REMOVE") {
                removeEmployee();
            } else {
                connection.end();
                process.exit(0);
            }
        });
};
// FUNCTIONS IF USER SELECTS ADD (Create)
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
        name: "departmentName",
        message: "What is the new department?"
    })
        .then((res) => {
            // after user answers this, insert a new departent in the database with info
            connection.query(
                'INSERT INTO department SET ?',
                { department_name: res.departmentName },
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
            message: "What is the new job title?"
        },
        {
            type: "input",
            name: "salary",
            message: "What is the salary for that job?"
        },
        {
            type: "input",
            name: "departmentId",
            message: "What is the department ID?"
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
// functions for adding employee
const addEmployees = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "firstName",
            message: "What is their First Name?"
        },
        {
            type: "input",
            name: "lastName",
            message: "What is their Last Name?"
        },
        {
            type: "list",
            name: "title",
            message: "what is thier job title?",
            choices: ["Manager", "Point Guard", "Shooting Guard", "Small Forward", "Power Forward", "Center"]
        },
        {
            type: "list",
            name: "manager",
            message: "Who is thier Manager?",
            choices: ["Vincent Gines", "Michael Jordan", "Kobe Bryant", "Lebron James", "Kevin Durant", "Stephen Curry", "Allen Iverson", "Trae Young", "Luka Doncic", "Wilt Chamberlain"]
        }
    ])
        .then((res) => {
            // after user answers this, insert a new departent in the database with info
            connection.query(
                'INSERT INTO employee SET ?',
                {
                    first_name: res.firstName,
                    last_name: res.lastName,
                    role_id: res.title,
                    manager_id: res.manager
                },
                (err) => {
                    if (err) throw err;
                    console.log("Employee successfully created.");
                    // re-prompt the user back to the beginning
                    start();
                }
            );
        });
}

// FUNCTION FOR IF USER PICKS VIEW (READ)
// then will pick options: view all employees, all employees by department, all employees by role, all employees by managers
const view = () => {
    inquirer.prompt({
        type: "list",
        name: "view",
        message: "What would you like to view?",
        choices: ["View all employees", "View all Employees by Department", "View all Employees by Role", "View all Employees by Manager",],
    })
        .then((res) => {
            // based on answer will call certain functions
            if (res.view === "View all employees") {
                viewEmployees();
            } else if (res.view === "View all Employees by Department") {
                viewEmployeesByDepartment();
            } else if (res.view === "View all Employees by Role") {
                viewEmployeesByRole();
            } else if (res.view === "View all Employees by Manager") {
                viewEmployeesByManager();
            }
        });
};
// function to view all employees
const viewEmployees = () => {
    let query = 
        "SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.department_name, employee.manager_id "
    query +=
        "FROM employee INNER JOIN role ON employee.role_id = role.id "
    query +=
        "INNER JOIN department ON role.department_id = department.id;"
    console.log("Selecting all employees...\n");
    connection.query(query, (err, res) => {
        if (err) throw err;
        // Log all results
        console.table(res);
        start();
    });
};
// function to view all employees by department
const viewEmployeesByDepartment = () => {
    let query = 
    "SELECT employee.id, employee.first_name, employee.last_name, department.department_name "
    query +=
        "FROM employee INNER JOIN role ON employee.role_id = role.id "
    query +=
        "INNER JOIN department ON role.department_id = department.id;"
    console.log("Selecting all employees by department...\n");
    connection.query(query, (err, res) => {
        if (err) throw err;
        // Log all results
        console.table(res)
        start();
    });
};
// function to view all employees by role
const viewEmployeesByRole = () => {
    let query = 
    "SELECT employee.id, employee.first_name, employee.last_name, role.title "
    query +=
        "FROM employee INNER JOIN role ON employee.role_id = role.id;"
    console.log("Selecting all employees by role...\n");
    connection.query(query, (err, res) => {
        if (err) throw err;
        // Log all results
        console.table(res);
        start();
    });
};
// function to view all employees by manager
const viewEmployeesByManager = () => {
    console.log("Selecting all employees by Manager...\n");
    connection.query("SELECT * FROM role", (err, res) => {
        if (err) throw err;
        // Log all results
        console.table(res);
        start();
    });
};
// FUNCTIONS IF USER PICKS UPDATE (UPDATE)
// then user picks option to either update employee role or update employee manager
const update = () => {
    inquirer.prompt({
        type: "list",
        name: "update",
        message: "What would you like to update?",
        choices: ["Employee Roles", "Employee Managers"],
    })
        .then((res) => {
            // based on answer will call certain functions
            if (res.update === "Employee Roles") {
                updateEmployeeRoles();
            } else if (res.update === "Employee Managers") {
                updateEmployeeManagers();
            }
        });
};
// function to update employee role
const updateEmployeeRoles = () => {
    console.log("Updating employee role...\n");
    const query = connection.query(
        "UPDATE role SET ? WHERE ?",
        [
            {
                title: "something goes here"
            },
            {
                salary: "something goes here"
            },
        ],
        (err, res) => {
            if (err) throw err;
            console.log(`${res.affectedRows} role updated!\n`);
        }
    );
    // logs the query being run
    console.log(query.sql)
};
// function to update employee managers
const updateEmployeeManagers = () => {
    console.log("Updating employee managers...\n");
    const query = connection.query(
        "UPDATE employee SET ? WHERE ?",
        [
            {
                manager_id: "something goes here"
            },
        ],
        (err, res) => {
            if (err) throw err;
            console.log(`${res.affectedRows} role updated!\n`);
        }
    );
    // logs the query being run
    console.log(query.sql)
};
// function to remove an employee (DELETE)
const removeEmployee = () => {
    inquirer.prompt(
        {
            type: "list",
            name: "employee",
            message: "Which Employee would you like to remove?",
            choices: []
        }
    );
};




start();