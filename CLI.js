const inquirer = require('inquirer');
const questions = require('./questions');
const { writeFile } = require('fs/promises');
const { Square, Circle, Triangle } = require('./shapes');
const { SVG, Text } = require('./SVG');


class CLI {
  constructor() {
  }
  run() {
    return inquirer
      .prompt(questions)
      .then((response) => {
        const svg = this.generateSVG(response);
        const markup = svg.render();
        return writeMarkup(svg, markup);
      })
      .then(() => console.log('Generated logo.svg'))
      .catch((err) => {
        console.log(err);
        console.log('Oops. Something went wrong.');
      });
  }

  generateSVG(inputs) {
    const logoText = new Text(inputs.text, inputs.textColour);

    switch (inputs.shape) {
        case "circle":
            const circle = new Circle(inputs.shapeColour);
            return new SVG(circle, logoText);
        case "square":
            const square = new Square(inputs.shapeColour);
            return new SVG(square, logoText);
        case "triangle":
            const triangle = new Triangle(inputs.shapeColour)
            return new SVG(triangle, logoText);
    }
}
}



module.exports = CLI;
