// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
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
      choices: ["Academic", "Apache", "GNU", "ISC", "MIT", "Mozilla", "Open"],
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

// TODO: Create a function to initialize app
const init = () => {
  questions()
    // Use writeFileSync method to use promises instead of a callback function
    .then((answers) =>
      fs.writeFileSync("sampleREADME.md", generateMarkdown(answers))
    )
    .then(() => console.log("Successfully wrote to sampleREADME.md"))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();
