# 10 Object-oriented Programming: SVG Logo Maker

## Your Task

Your task is to build a Node.js command-line application that takes in user input to generate a logo and save it as an [SVG file](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics). The application prompts the user to select a color and shape, provide text for the logo, and save the generated SVG to a `.svg` file.

Because this application won’t be deployed, you’ll need to provide a link to a walkthrough video that demonstrates its functionality and passes all of the tests. You’ll need to submit a link to the video **and** add it to the README of your project.

Refer to the [Video Submission Guide](https://coding-boot-camp.github.io/full-stack/computer-literacy/video-submission-guide) on the Full-Stack Blog for additional guidance on creating a video.

> **Note**: There is no starter code for this assignment.
### User Story

```md
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```

## Methodology

I started by creating the shapes.js file which used a base class 'Shapes' which took in a colour value and was further extended by the 'Circle', 'Square' and 'Triangle' classes which carried the markup for the generation of the shapes. Next, I created the 'SVG' and 'LogoText' classes. The LogoText class took in text and colour as inputs and returned the corresponding markup. The 'SVG' class took the shape and text inputs returned the corresponding markup for that. Next, I worked on the CLI class. I imported all the classes I had used so far, as well as 'inquirer' and 'writeFile'. The CLI prompts questions from questions.js and uses the responses as inputs for the generateSVG method which calls upon the LogoText, Circle, Square and Triangle classes and returns the corresponding SVG markup. The writeFile method is called and returns a file called "logo.svg" containing the SVG markup. Finally, if there's no errors, "Generated logo.svg" is printed to the console, if there's an error, it's caught and "oops, somethign went wrong" is printed to the console.

## Links

Video: https://www.loom.com/share/7ffeff83b9af4451bac56e92cecd2ac1
GitHub repo: https://github.com/Tiernan-97/SVG-logo-Generator
