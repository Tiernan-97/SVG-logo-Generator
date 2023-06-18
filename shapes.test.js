const {Square, Circle, Triangle} = require('./shapes');

describe("Circle", () => {
    test("should generate an svg or an orange circle", () => {
        const expectedSVG = `<circle cx="150" cy="100" r="80" fill="orange" />`
        const circle = new Circle('orange');
        const actualSVG = circle.render();
        expect(actualSVG).toEqual(expectedSVG);
    })
    test("should accept a colour parameter", () => {
        const expectedSVG = `<circle cx="150" cy="100" r="80" fill="red" />`
        const circle = new Circle('red');
        const actualSVG = circle.render();
        expect(actualSVG).toEqual(expectedSVG);
    });
});
describe("Square", () => {
    test("should generate an svg or an orange square", () => {
        const expectedSVG = `<rect x="90" y="40" width="120" height="120" fill="orange" />`
        const square = new Square('orange');
        const actualSVG = square.render();
        expect(actualSVG).toEqual(expectedSVG);
    })
    test("should accept a colour parameter", () => {
        const expectedSVG = `<rect x="90" y="40" width="120" height="120" fill="blue" />`
        const square = new Square('blue');
        const actualSVG = square.render();
        expect(actualSVG).toEqual(expectedSVG);
    });
});
describe("Triangle", () => {
    test("should generate an svg or an orange triangle", () => {
        const expectedSVG = `<polygon points="150, 18 244, 182 56, 182" fill="orange" />`
        const triangle = new Triangle('orange');
        const actualSVG = triangle.render();
        expect(actualSVG).toEqual(expectedSVG);
    })
    test("should accept a colour parameter", () => {
        const expectedSVG = `<polygon points="150, 18 244, 182 56, 182" fill="red" />`
        const triangle = new Triangle('red');
        const actualSVG = triangle.render();
        expect(actualSVG).toEqual(expectedSVG);
    });
});