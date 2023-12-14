// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    "What is the title of your project?",
    "Write a description for your project: ",

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const markdownContent = generateMarkdown(data);
    fs.writeFile(
        fileName,
        markdownContent,
        (err) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log("README.md Created!")

        }
    );
}

// TODO: Create a function to initialize app

// FROM THE ASSIGNMENT README
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

function init() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is your project title?",
                name: "title",
            },
            {
                type: "input",
                message: "Write your projects description: ",
                name: "description",
            },
            {
                type: "input",
                message: "Write your projects instalation instructions: ",
                name: "instalation",
            },
            {
                type: "input",
                message: "Write your projects usage information: ",
                name: "usage",
            },
            {
                type: "input",
                message: "What is the file name of the screenshot in your assets/images folder? (example: screenshot.png) ",
                name: "screenshot",
            },
            {
                type: "input",
                message: "Write your projects contributing guidelines: ",
                name: "contribution",
            },
            {
                type: "input",
                message: "Write your projects test instructions: ",
                name: "test",
            },
            {
                type: "list",
                message: "Select a license to use: ",
                name: "license",
                choices: ["MIT", "Choice2", "Choice3", new inquirer.Separator(), "NONE"]
            },

        ])
        .then((response) => {
            const fileName = "README.md";
            writeToFile(fileName, response)
        }
        );

}

// Function call to initialize app
init();
