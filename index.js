// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
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
            // `# CUSTOM README\n## Title\n${response.title}\n## Languages\n${response.description}\n## Methods of Communication\n${response.moc}`,
            // () => {
            //     console.log("README.md Created!");
        }
    );

    // TODO: I tried this but I actually think we will be using the generateMarkdown util to do this part, we may just call the function here. We probably need to add something like this:
    // generateMarkdown.generateMarkdown();
}

// TODO: Create a function to initialize app
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
                message: "Write your description",
                name: "description",
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
