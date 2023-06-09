//variable for container div node
const containterDiv = document.querySelector(".container");

//variable for reset button node
const resetButton = document.querySelector("#reset");
//adds EventListener for reset button that calls reset()
resetButton.addEventListener('click', reset);

//creates intitial grid of 16x16 sqaures
makeGrid(16);

// makeGrid() function creates a grid based on number passed to it
function makeGrid(squares) {
    //space is set based on sqaures to ensure uniform squares
    let space = (780/ squares);
    //add grid of divs
    for (let i = 1; i <= squares; i++) {
        //creates a div element to act as a row
        let div = document.createElement('div');
        //'div' is given an id that matches i
        div.setAttribute('id', `div-row-${i}`);
        //div set to flex 1 and given display flex style
        div.style.flex = "1";
        div.style.display = "flex";
        //adds border style to see entire working area
        if(i == 1) {
            div.style.borderTop = "1px solid black";
        }
        if(i == squares) {
            div.style.borderBottom = "1px solid black";
        }
        div.style.borderLeft = "1px solid black";
        div.style.borderRight = "1px solid black";
        //'div' added to containter div
        containterDiv.appendChild(div);
        //adds squares for each row
        for (let j = 1; j <= squares; j++) {
            //create a div element to act as new square
            let innerDiv = document.createElement('div');
            //'innerDiv' is given an id that matches the row and j and class 'sqaure'
            innerDiv.setAttribute('id', `div-space-${i}-${j}`);
            innerDiv.setAttribute('class', 'square');
            //width and height
            innerDiv.style.width = `${space}px`;
            innerDiv.style.height = `${space}px`;
            //esnure that 'innerDiv's box shape is maintained
            innerDiv.style.aspectRatio = "1/1";
            //adds EventListener to each sqaure that calls changeColor()
            innerDiv.addEventListener('mouseover', changeColor);
            //'innerDiv' added to the current row
            div.appendChild(innerDiv);
        }
    }
}

// changeColor() function adds the 'selected' class to a node and changes the backgound-color to a random color
//  or darkens the node if it already has a color
function changeColor(e) {
    //IF sqaure has not been selected before
    if(e.target.className != 'square selected') {
        //add 'selected' class node
        e.target.classList.add('selected');
        //get random values for rgb
        let randomR = Math.floor(Math.random() * 256);
        let randomG = Math.floor(Math.random() * 256);
        let randomB = Math.floor(Math.random() * 256);
        //set background-color using the new rgb values
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    }
    //ELSE the square already has a random background-color
    else {
        //get the current rgb values
        let rgb = window.getComputedStyle(e.target).getPropertyValue('background-color');
        rgb = rgb.replace(/[^\d,]/g, '').split(',');
        let currentR = rgb[0];
        let currentG = rgb[1];
        let currentB = rgb[2];
        //call darken() funciton for each rgb value to subtract 25 or set to 0
        currentR = darken(currentR);
        currentG = darken(currentG);
        currentB = darken(currentB);
        //set background-color using the new darker rgb values
        e.target.style.backgroundColor = `rgb(${currentR}, ${currentG}, ${currentB})`;
    }
}

// darken() function takes a value and returns that value minus 25 or 0
function darken (value) {
    if(value >= 25) {
        value -= 25;
        return value;
    }
    return 0;
}

// reset() function prompts the user for new size for new grid
function reset () {
    //prompts user for new number and sets 'newGrid' to input
    let newGrid = prompt("Plase enter numer of row and columns!");
    //IF 'newGrid' is less than 1
    if(newGrid < 1) {
        //alert user that number is not big enough
        alert("Number must be bigger than 0");
        //keep current grid
        return;
    }
    //IF 'newGrid' is more than 100
    if(newGrid > 100) {
        //set 'newGrid' to 100
        newGrid = 100;
    }
    //remove cureent grid
    while(containterDiv.firstChild) {
        containterDiv.removeChild(containterDiv.lastChild);
    }
    //call makeGrid() with 'newGrid' passed as an integer
    makeGrid(+newGrid);
}