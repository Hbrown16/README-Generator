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
    {
        type: "input",
        name: "Operate",
        message: "Provide information on how to use",
    },
    {
        type: "input",
        name: "contribute",
        message: "What did you contribute?",
    },
    {
        type: "prompt",
        name: "testing",
        message: "If you wish to run a test, enter this command.",
        default: "npm run test",
    },
    {
        type: "list",
        name: "license",
        message: "What license is this under?",
        choices: ["GitLab", "Github", "PyPI"],
    },
    {
        type: "input"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
