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
        name: "Explanation",
        message: "Please describe your project and what applications did you use?",
    },
    {
        type: "input",
        name: "InstallCode",
        message: "Install npm i",
        default: "npm i",
    },
    {
        type: "input",
        name: "Usage",
        message: "Provide information on how to use",
    },
    {
        type: "input",
        name: "Contribute",
        message: "What did you contribute?",
    },
    {
        type: "prompt",
        name: "Testing",
        message: "If you wish to run a test, enter this command.",
        default: "npm run test",
    },
    {
        type: "list",
        name: "License",
        message: "What license is this under?",
        choices: ["Github", "PyPI"],
    },
    {
        type: "input",
        message: "What is your email?",
        name: "Email",
    },
    {
        type: "input",
        message: "Enter Github username:",
        name: "Username",
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log('COMPLETE')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions).then((response) => {
            writeToFile("README.md", response)}
        )
}

// Function call to initialize app
init();
