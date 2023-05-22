// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const {writeFile} = require('fs').promises;
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = ['What is your project title?','What is your description?','What is in your table of contents?','How do you install your project?','What is your project used for?','Which of these licenses did you use?','Who contributed to this project?','What tests were preformed?'];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    js.writeFile()
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message:
        }
    ])
}

// Function call to initialize app
init();
