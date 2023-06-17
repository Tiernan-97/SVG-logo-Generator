class SVG {
    constructor(shape, text) {
        this.shape = shape;
        this.text = text;
    }
    render() {
        const svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape.render()}${this.text.render()}</svg>`
    }
}

class Text {
    constructor(text, colour) {
        this.text = text;
        this.colour = colour;
    }
    render() {
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.colour}">${this.text}</text>`
    }
}

exports.module = {SVG, Text};