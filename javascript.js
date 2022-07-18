const grid = document.querySelector('.grid');
let gridSize = 16;
const resetBtn = document.querySelector('.reset');
const applyGridSize = document.querySelector('.apply');
let squareSize = 8;

createGrid(squareSize);

function createSquare(size) {
    const div = document.createElement('div');
    div.classList.add('box');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    return div;
}

function gridDimension() {
    squareSize = prompt("Enter size of grid: ");
    if (squareSize > 100 || squareSize < 1 || squareSize == null || squareSize == "" || isNaN(squareSize)) {
        alert("Please enter a number between 1 and 100");
        gridDimension();
    }
    return squareSize;
}

function createGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            grid.appendChild(createSquare(grid.clientWidth / gridSize));
        }
    }
}

function reset() {
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    }
    createGrid(squareSize);
}

grid.addEventListener('mouseover', function (e) {
    if (e.target.matches('.box')) {
        e.target.classList.add('active');
    }
});

applyGridSize.addEventListener('click', function () {
    gridDimension();
    reset();
});

resetBtn.addEventListener('click', reset);