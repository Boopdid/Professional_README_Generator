const inquirer = require("inquirer");
const fs = require("fs");

const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of the project?",
    },
    {
      type: "input",
      name: "description",
      message: "Project description",
    },
    {
      type: "input",
      name: "installation",
      message: "How do you install your project?",
    },
    {
      type: "input",
      name: "usage",
      message: "How do you use your project?",
    },
    {
      type: "input",
      name: "contributors",
      message: "Who contributed to this project?",
    },
    {
      type: "input",
      name: "test",
      message: "Does your project have test code?",
    },
    {
      type: "list",
      name: "license",
      message: "What license does your project have?",
      choices: ["Apache", "GNU", "ISC", "MIT", "Open"],
    },
    {
      type: "input",
      name: "username",
      message: "What is your GitHub username?",
    },
    {
      type: "input",
      name: "email",
      message: "Enter your email.",
    },
  ]);
};

function generateMarkdown(answers) {
  return ` # ${answers.title}
  
![badge](https://img.shields.io/badge/license-${answers.license}-success)

## Description
${answers.description}
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Installation
${answers.installation}
## Usage
${answers.usage}
## License
![badge](https://img.shields.io/badge/license-${answers.license}-success)

This application is covered by the ${answers.license} license. 
## Contributing
${answers.contributors}
## Tests
${answers.test}
## Questions

Find me on GitHub: [${answers.username}](https://github.com/${answers.username})

Email me with any questions: ${answers.email}
`;
}

const init = () => {
  questions()
    .then((answers) =>
      fs.writeFileSync("sampleREADME.md", generateMarkdown(answers))
    )
    .then(() => console.log("Successfully wrote to sampleREADME.md"))
    .catch((err) => console.error(err));
};

init();
