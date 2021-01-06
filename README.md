# mySQL_EmployeeTrackerOhYeah

## Description:
In this homework assignment, the challenge is to architect and build a solution for managing a company's employees using node, inquirer, and MySQL. I needed to design the following database schema containing three tables:
department:

id - INT PRIMARY KEY
name - VARCHAR(30) to hold department name
role:

id - INT PRIMARY KEY
title - VARCHAR(30) to hold role title
salary - DECIMAL to hold role salary
department_id - INT to hold reference to department role belongs to
employee:

id - INT PRIMARY KEY
first_name - VARCHAR(30) to hold employee first name
last_name - VARCHAR(30) to hold employee last name
role_id - INT to hold reference to role employee has
manager_id - INT to hold reference to another employee that manages the employee being Created. 

So in order to do this I needed to build a command line app that allows the user to add (Employees, Roles, Departments), view (all Employees, all Employees by Role, all Employees by Manager, all Departments, and all Roles), update Employee Roles and Employee Managers, remove Employees, Roles, and Employees. To make it all work I needed to install npm packages (MySQL NPM package to connect to your MySQL database and perform queries, inqurier NPM package to interact with the user via the command-line, and console.table to print MySQL rows to the console. 

After creating my database and inserting data for the tables, I connected info for the sql database and connected the database. Then I created a function using inquirer which prompts user what action to take (add, view, update, remove, exit). Based on their answer, it will call certain functions for each category. Each category contains subcategories where each subcategory has its own function. 

## Table of Contents:

  * [Installation](#Installation)

  * [Usage](#Usage)

  * [License](#License)

  * [Contributing](#Contributing) 

  * [Test Instructions](#Test-Instructions)

  * [Demo](#Demo)

  * [Questions](#Questions)

  * [Challenges](#Challenges)

## Installation:
Must install: inquirer, mySQL, and console table

    npm install inquirer
    npm install mysql
    npm install console.table

## Usage:
Javascript, Node, Inquirer, MySQL, Console Table, and Workbench.

## License:
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

## Contributing:
Vincent Gines. Ask for a Pull Request from my Github profile below in the questions section if you would like to contribute to my generator.

## Test Instructions:
First, go to my Github Profile and clone my mySQL Employee Tracker repository onto your computer using gitbash. Then open up your terminal and install the dependencies by typing: npm install. Once installed, copy the schema files onto your workbench and load it. Once good to go back to your terminal and type: node employee-tracker.js to run the app in node. There you will be able to track your employees, where you can add (employees, roles, departments), view (all employees, all employees by role, all employees by manager, all departments, and all roles), update employee roles and employee Managers, remove employees, roles, and employees.

## Demo:
Click on the link to see my live demo: https://drive.google.com/file/d/1CW0VpNUbkdo31_YGTsIdUjnnC2-4e2xW/view

## Challenges:
Some of the challenges I had to figure out was the syntax, Learning the INNER/LEFT/RIGHT join, and just going with my gut. When I first started the assignment, I just went off the readme and didn't pay too much attention to the demo. When I hit a roadblock I was on the fence whether to make the assigment look exactly like the demo, and started to alter it according to the demo hoping I didn't run into too much issues. However, during that process, I reverted back to what I had originally done because I felt more comfortable writing it this way. Anyways, I pushed forward and finished the assignment to the best of my ability. 

---
## Questions:


Link to my Github profile: https://github.com/vgines73

Link to mySQL Employee Tracker: https://github.com/vgines73/mySQL_EmployeeTrackerOhYeah


You can reach me by email at: vgines73@gmail.com

© 2020 Vincent Gines. All rights reserved. 