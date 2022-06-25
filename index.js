const options = document.querySelector('#options');
const grid = document.querySelector('#grid');

function makeGrid(size) {

    //  Iterate through a column
    for (let i = 0; i < size; i++) {
        let row = document.createElement('div');
        row.className = "row";

        //  Create a column of squares for each row
        grid.appendChild(row);

        //  Iterate through a row, create a square
        for (let j = 0; j < size; j++) {
            let square = document.createElement('div');
            square.className = "square ";
            row.appendChild(square);
        }
    }

    //  Change color when hover over 
    //  Reverts back when hover away
    let squares = document.querySelectorAll('.square');

    squares.forEach((square) => {
        square.addEventListener("mouseover", () => {
            console.log('square changed color');
            square.style.backgroundColor = "black";
        })
        
        // square.addEventListener("mouseout", () => {
        //     console.log('square reverted back color');
        //     square.style.backgroundColor = "lightgrey";
        // });

        //  Change color permantly after clicking square
        // square.addEventListener("mousedown", () => {
        //     square.style.backgroundColor = "black";
        // });
    });
}

makeGrid(16);

//  Reset Grid
let resetGridBtn = document.createElement('button')
resetGridBtn.setAttribute('id', 'resetGridBtn');
resetGridBtn.textContent = 'New Grid';
options.appendChild(resetGridBtn);

let resetGrid = document.querySelector('#resetGridBtn');
resetGrid.addEventListener('click', () => {
    removeSquares();
    askNewGrid();
})

function askNewGrid() {
    let newGridNum = prompt("How many squares per side for the new grid?")
    if (newGridNum < 101) {
        makeGrid(newGridNum);
    } else {
        alert('Please input a maximum of 100.');
        askNewGrid();
    }
}

//  Remove squares
function removeSquares() {
let rows = document.querySelectorAll('.row');

    rows.forEach((row) => {
    row.remove();
    });
}
