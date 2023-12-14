// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Description:
  ${data.description}

  ## Table of Contents 
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)


  ## Instalation:
  ${data.instalation}

  ## Usage:
  ${data.usage}

  ![screenshot of app](assets/images/${data.screenshot})

  ## Credits:
  ${data.credits}

  ## License:
  ${data.license}

  ### Thank You!
  `;
}

module.exports = generateMarkdown;


// ? What is your project title? TITLE
// ? Write your projects description:  THis is mY dEscrIPtiOn!
// ? Write your projects instalation instructions:  Instal it real good 8)
// ? Write your projects usage information:  Use it with adult supervision
// ? Write your projects contributing guidelines:  this is like the worlds code dude, like no one owns the data mannnnnnn..... its in the ether of 0's and 1's buddy... 
// yeahyou better shout me out if you use it tho, homie...
// ? Write your projects test instructions:  Allways test your powders dude, if it grows from the ground, its probably safe and sound though ;)
// ? Select a license to use:  MIT
// README.md Created!
