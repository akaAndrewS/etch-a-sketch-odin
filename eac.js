//variable for container div node
const containterDiv = document.querySelector(".container");

//add 16x16 grid of divs
for (let i = 1; i <= 16; i++) {
    //creates a div element to act as a row
    let div = document.createElement('div');
    //'div' is given an id that matches i
    div.setAttribute('id', `div-row-${i}`);
    //div set to flex 1 and given display flex style
    div.style.flex = "1";
    div.style.display = "flex";
    //'div' added to containter div
    containterDiv.appendChild(div);
    //adds 16 squares for each row
    for (let j = 1; j <= 16; j++) {
        //create a div element to act as new square
        let innerDiv = document.createElement('div');
        //'innerDiv' is given an id that matches the row and j
        innerDiv.setAttribute('id', `div-space-${i}-${j}`);
        //width and height
        innerDiv.style.width = "50px";
        innerDiv.style.height = "50px";
        //esnure that 'innerDiv's box shape is maintained
        innerDiv.style.aspectRatio = "1/1";
        //adds border style to see each square
        innerDiv.style.border = "1px solid black";
        //'innerDiv' added to the current row
        div.appendChild(innerDiv);
    }
}

//mouseover mouseleave