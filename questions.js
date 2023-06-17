const questions = [{
    type: 'input',
    name: 'shape',
    message: 'Please select a shape',
    choices: [Circle, Square, Triangle],
}, {
    type: 'input',
    name:'shapeColour',
    message: 'Please enter the colour you would like for your shape',
}, {
    type: 'input',
    name:'text',
    message: 'Please enter the text you would like in your logo (a maximum of three characters)',
}, {
    type: 'input',
    name:'textColour',
    message: 'Please enter the colour you would like for your text',
}]