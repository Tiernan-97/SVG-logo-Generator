const {SVG, LogoText} = require('./SVG');
const {Triangle} = require('./shapes');

test("should return a 300x200 svg image", () => {

    const colour = "blue";
    const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="blue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">SVG</text></svg>`

  const triangle = new Triangle(colour);
  const logotext = new LogoText("SVG",colour);

  const svg = new SVG(triangle, logotext);
  expect(svg.render()).toEqual(expectedSVG);
});

