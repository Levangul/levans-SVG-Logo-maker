const inquirer = require("inquirer");
const fs = require("fs");
const generateSVG = require("./lib/generateSVG");

const questions = [
  {
    type: "input",
    message:
      "What letters your logo would you like to contain? (up to three characters)",
    name: "text",
  },

  {
    type: "input",
    message: "Choose text color (Enter color keyword OR a hexadecimal number)",
    name: "textColor",
  },

  {
    type: "list",
    message: "Choose a shape",
    choices: ["Triangle", "Square", "Circle"],
    name: "shape",
  },
  {
    type: "input",
    message: "Choose text color (Enter color keyword OR a hexadecimal number)",
    name: "backgroundcolor",
  },
];

const createSVG = (fileName, data) => {
  const template = generateSVG(data);
  fs.writeFile(fileName, template, (err) => {
    err ? console.error(err) : console.log("Generated logo.svg");
  });
};


const init = () => {
  
  inquirer.prompt(questions).then((data) => {
    createSVG("logo.svg", data);
  });
};

init();
