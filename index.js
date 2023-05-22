// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = ['What is your project title?','What is your description?','How do you install your project?','What is your project used for?','Which of these licenses did you use?','Who contributed to this project?','What tests were preformed?','What is your GitHub username?','What is your email?'];

// TODO: Create a function to write README file
function writeToFile(data) {

    fs.writeFile("README-output.md", generateMarkdown(data), (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('README file successfully created!');
        }
    }
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: questions[0],
            },
            {
                type: 'input',
                name: 'description',
                message: questions[1],
            },
            {
                type: 'input',
                name: 'install',
                message: questions[2],
            },
            {
                type: 'input',
                name: 'use',
                message: questions[3],
            },
            {
                type: 'input',
                name: 'contributing',
                message: questions[5],
            },
            {
                type: 'input',
                name: 'tests',
                message: questions[6],
            }, 
            {
                type: 'list',
                name: 'license',
                message: questions[4],
                choices: ['IBM','ISC','MIT','None'],
            },
            {
                type: 'input',
                name: 'github',
                message: questions[7],
            },
            {
                type: 'input',
                name: 'email',
                message: questions[8],
            }
        ])
        .then((answers) => {

            const data = answers;

            writeToFile(data);

        })
}

// Function call to initialize app
init();
