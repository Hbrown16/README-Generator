// TODO: Include packages needed for this application
const inquirer = require("inquirer");

const fs = require("fs");

const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "Title",
        message: "What is the Title?",
    },
    {
        type: "input",
        name: "explanation",
        message: "Please describe your project and what applications did you use?",
    },
    {
        type: "input",
        name: "installCode",
        message: "Install npm i",
        default: "npm i",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
