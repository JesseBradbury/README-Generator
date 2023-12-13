// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    "What is the title of your project?",
    "Write a description for your project: ",


    // inquirer
    //     .prompt([
    //         {
    //             type: "input",
    //             message: "What is the title of your project?",
    //             name: "title",
    //         },
    //         {
    //             type: "input",
    //             message: "Write a description for your project:",
    //             name: "languages",
    //         },
    //     ])
        ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    // TODO: I tried this but I actually think we will be using the generateMarkdown util to do this part, we may just call the function here. We probably need to add something like this:
    // const generateMarkdown = require('./utils/generateMarkdown.js');

    
//     fs.writeFile(
//         "README.md",
//         `# CUSTOM README\n## Title\n${response.title}\n## Languages\n${response.description}\n## Methods of Communication\n${response.moc}`,
//         () => {
//           console.log("README.md Created!");
//         }
//       )
 }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
