class Shapes {
    constructor(colour = '#000000') {
        this.colour = colour;
    }
    setColour(colour) {
        this.colour = colour;
    }
}

class Square extends Shapes {
    constructor(colour) {
        super(colour);
    }
    render() {
        const graphic = `<rect x="90" y="40" width="120" height="120" fill="${this.colour}" />`
        return graphic;
    }
}

class Circle extends Shapes {
    constructor(colour) {
        super(colour);
    }
    render() {
        const graphic = `<circle cx="150" cy="100" r="80" fill="${this.colour}" />`
        return graphic;
    }
}

class Triangle extends Shapes {
    constructor(colour) {
        super(colour);
    }
    render() {
        const graphic = `<polygon points="150, 18 244, 182 56, 182" fill="${this.colour}" />`
        return graphic;
    }
}

exports.modules = {Square, Circle, Triangle};