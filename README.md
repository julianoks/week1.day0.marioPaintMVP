# week1.day0.marioPaintMVP

## Instructions
1. Use the command line to create a new project folder called `marioPaintMVP`
2. Inside of your project folder:  
    - Create a JS file, `sketch.js`
    - Create an HTML file, `index.html`
    - Make a reference to the JS file
    - Reference the [p5.js CDN](https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.1/p5.js) in your HTML header
    - Start your p5.js using the `setup()` function to define your canvas (500x500)
    - Create the `mouseDragged` function (Read the [p5.js documentation](https://p5js.org/reference/) about how this function works). 
    - Inside of the function, create a simple shape that will be drawn at the mouse’s location
    - Use the `random()` function from p5.js to create the shape with different dimensions each time the shape is created
      - _NOTE: this is different from `Math.random()`_

## Extra Credit
- In addition to changing the dimension of the shape, also change the shape’s `fill()` color to a random color each time the mouse is dragged
  - NOTE: on the Red-Green-Blue (RBG) scale, each color can have a value from 0-255
- Instead of creating the same shape every time, create a rectangle or ellipse at random
  - Bonus for creating a triangle, too!
- On mouse click, have the background change to a random color

## Helpful Resources
- [p5.js reference](https://p5js.org/reference/)
- [p5.js CDN](https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.1/p5.js) found at [cdnjs.com](https://cdnjs.com/libraries/p5.js/)
