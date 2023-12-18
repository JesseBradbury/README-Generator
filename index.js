// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project title?",
    },
    {
        type: "input",
        name: "description",
        message: "Write your projects description: ",
    },
    {
        type: "input",
        name: "instalation",
        message: "Write your projects instalation instructions: ",
    },
    {
        type: "input",
        name: "usage",
        message: "Write your projects usage information: ",
    },
    {
        type: "input",
        name: "screenshot",
        message: "What is the file name of the screenshot in your assets/images folder? (example: screenshot.png) ",
    },
    {
        type: "input",
        name: "credits",
        message: "Write your projects contributing guidelines: ",
    },
    {
        type: "input",
        name: "test",
        message: "Write your projects test instructions: ",
    },
    {
        type: "list",
        name: "license",
        message: "Select a license to use: ",
        choices: ["MIT", "Apache", "GNU General Public", "ISC", new inquirer.Separator(), "NONE"]
    },
    // TODO: Add questions about github and email for the "Questions" section. 
    {
        type: "input",
        name: "gitHub",
        message: "Provide your GitHub user name: ",
    },
    {
        type: "input",
        name: "email",
        message: "Provide your E-Mail: ",
    },
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
        .prompt(questions)
        .then((response) => {
            const fileName = "README.md";
            writeToFile(fileName, response)
        }
        );

}

// Function call to initialize app
init();
