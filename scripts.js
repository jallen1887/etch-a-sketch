function createGrid(gridBoxNumber) {
    const gridContainer = document.querySelector('#grid-container');
    const gridBoxSize = findGridBoxSize(gridBoxNumber);
    
    for (let i = 0; i < gridBoxNumber**2; i++) {
        const gridBox = document.createElement('div');
        gridBox.classList.add('grid-box');

        gridBox.style.width = gridBoxSize;
        gridBox.style.height = gridBoxSize;
        gridContainer.appendChild(gridBox);
        gridBox.addEventListener('mouseover', changeColor);
        
    }
}

function getRandomRGB() {
    return Math.floor(Math.random() * 256);
}

function changeColor(e) {
    const rainbowCheck = document.querySelector('#rainbow');

    if (rainbowCheck.checked) {
        e.target.style.backgroundColor = `rgb(${getRandomRGB()},
                                              ${getRandomRGB()},
                                              ${getRandomRGB()})`;
    }
    else {
        e.target.style.backgroundColor = 'black';
    }
}

function findGridBoxSize(gridBoxNumber){
    let sizeNumber = document.querySelector('#grid-container').offsetWidth / gridBoxNumber;
    let sizeText = `${sizeNumber}px`
    return sizeText;
}

function removeGrid() {
    const gridContainer = document.querySelector('#grid-container');
    let gridBoxes = document.querySelectorAll('.grid-box');

    gridBoxes.forEach((gridBox) => {
        gridContainer.removeChild(gridBox);
    })
}

const slider = document.querySelector('#grid-slider');
let output = document.querySelector('#grid-size-text');

output.textContent = `${slider.value} x ${slider.value}`;
createGrid(slider.value);

slider.oninput = function() {
    output.textContent = `${this.value} x ${this.value}`;
}

slider.onchange = function() {
    removeGrid();
    createGrid(this.value);
    
}


