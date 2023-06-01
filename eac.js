//variable for container div node
const containterDiv = document.querySelector(".container");

//variable for reset button node
const resetButton = document.querySelector("#reset");
//adds EventListener for reset button that calls reset()
resetButton.addEventListener('click', reset);

//creates intitial grid of 16x16 sqaures
makeGrid(16);

// makeGrid() function that creates a grid based on sqaures
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

// changeColor() function takes adds the 'sected' class to a node for a set amount of time
function changeColor(e) {
    e.target.classList.add('selected');
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