const inquirer = require("inquirer");
const fs = require("fs");
const generateSVG = require("./lib/generateSVG");

const questions = [
  {
    type: "input",
    message:
      "What letters your logo would you like to contain? (up to three characters)",
    name: "text",
    validate: (input) => input.length <= 3,
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
    name: "shapeColor",
  },
];

function writeToFile(fileName, data) {
  const template = generateSVG(data)
  fs.writeFile(fileName, template, function (err) {
    if (err) {
      return console.error(err)
  } else {
      return console.log("generated logo.svg")
  }

  })

}



function init() {
  inquirer.prompt(questions)
  .then(function(data) {
    writeToFile("logo.svg", data);
  });
};

init();
