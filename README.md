This project is to exercise my understanding of Javascript events. 
This project also continues my practice of the CLI as well as Git and GitHub basics, CSS styling and HTML.

index.html contains only boilerplate code as well as a div and button. It also links to styles.css and eac.jss

styles.css sets the container div to flex and centers content and items.

eac.js contains multiple functions:
- makeGrid() function creates a grid based on number passed to it
- changeColor() function adds the 'selected' class to a node and changes the backgound-color to a random color or darkens the node if it already has a color
- darken() function takes a value and returns that value minus 25 or 0
- reset() function prompts the user for new size for new grid

it also sets variables for container div node and reset button node and adds EventListener for reset button that calls reset().
Finally, it makes an intial call to makeGrid() to create intitial grid of 16x16 sqaures

THIS PROJECT WAS MADE FOR EDUCATIONAL PURPOSES.