const grid = document.querySelector('.grid');
let gridSize = 16;
const resetBtn = document.querySelector('.reset');
const applyGridSize = document.querySelector('.apply');
const randomColor = document.querySelector('.random');
let squareSize = 8;
let setRandom = false;

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
    if (squareSize > 100 || squareSize < 1 || squareSize == null || squareSize == "" || isNaN(squareSize) || squareSize % 1 < 0) {
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

randomColor.addEventListener('click', function () {
    if (setRandom) {
        setRandom = false;
        randomColor.style.backgroundColor = 'var(--color-button)';
    } else {
        setRandom = true;
        randomColor.style.backgroundColor = 'var(--color-button-hover)';
    }
});

grid.addEventListener('mouseover', function (e) {
    if (e.target.matches('.box')) {
        if (setRandom) {
            e.target.style.backgroundColor = setColor();
        } else {
            e.target.classList.add('active');
        }
    }
});

applyGridSize.addEventListener('click', function () {
    gridDimension();
    reset();
});



resetBtn.addEventListener('click', reset);

function setColor() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + randomColor;
}
