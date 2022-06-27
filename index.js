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

    draw();
    
}

// Change color
function draw() {
    let squares = document.querySelectorAll('.square');
    let setBlack = document.querySelector('#blackBtn');
    let setRainbow = document.querySelector('#rainbowBtn');
    let setEraser = document.querySelector('#eraserBtn');

    // Default set to black
    setBlack.checked = true;

    // Check if the radio button is selected
    if ((setBlack).checked) {
        squares.forEach((square) => {
            square.addEventListener('mouseover', () => {
                // console.log('turn black');
                square.style.backgroundColor = "black";
            });
        });
    }

    if ((setRainbow).checked) {
        squares.forEach((square) => {
            square.addEventListener('mouseover', () => {
                // console.log('turn rainbow');
                square.style.backgroundColor = generateRandomColor();
            });
        });
    }

    // Change color according to color picked
    if ((setEraser).checked) {
        squares.forEach((square) => {
            square.addEventListener('mouseover', () => {
                // console.log('turn erasor');
                square.style.backgroundColor = 'lightgray';
            });
        });
    }

    setBlack.addEventListener('click', () => {

        if ((setBlack).checked) {
            squares.forEach((square) => {
                square.addEventListener('mouseover', () => {
                    // console.log('turn black');
                    square.style.backgroundColor = "black";
                });
            });
        }

    });

    setRainbow.addEventListener('click', () => {

        if ((setRainbow).checked) {
            squares.forEach((square) => {
                square.addEventListener('mouseover', () => {
                    // console.log('turn rainbow');
                    square.style.backgroundColor = generateRandomColor();
                });
            });
        }

    });

    setEraser.addEventListener('click', () => {

        if ((setEraser).checked) {
            squares.forEach((square) => {
                square.addEventListener('mouseover', () => {
                    // console.log('turn erasor');
                    square.style.backgroundColor = 'lightgray';
                });
            });
        }

    });
}

function generateRandomColor() {
    let rColor = Math.floor(Math.random() * 256);
    let gColor = Math.floor(Math.random() * 256);
    let bColor = Math.floor(Math.random() * 256);
    let rainbowColor = `rgb(${rColor}, ${gColor}, ${bColor})`;
    return rainbowColor;
}

//  Reset Grid
let resetGrid = document.querySelector('#resetGridBtn');
resetGrid.addEventListener('click', () => {
    askNewGrid();
});

function askNewGrid() {
    let newGridNum = prompt("How many squares per side for the new grid?")
    if (newGridNum === null) {
        return;
    } else if (newGridNum < 101 && newGridNum > 0) {
        removeSquares();
        makeGrid(newGridNum);
        draw();
    } else {
        alert('Please input a number from 1-100.');
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

makeGrid(16);