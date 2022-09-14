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

function rgbToInt(rgb) {
    let rgbString = rgb.substring(4, rgb.length-1)
                       .replace(/ /g, '')
                       .split(',');
    let rgbInt = [Number(rgbString[0]),
                  Number(rgbString[1]),
                  Number(rgbString[2])];
    return rgbInt;
}

function changeColor(e) {
    const rainbowCheck = document.querySelector('#rainbow');
    const greyscaleCheck = document.querySelector('#greyscale');

    if (e.target.style.backgroundColor == '') {

        if (rainbowCheck.checked) {
            e.target.style.backgroundColor = `rgb(${getRandomRGB()},
                                                  ${getRandomRGB()},
                                                  ${getRandomRGB()})`;
        }
        else if (greyscaleCheck.checked) {
            e.target.style.backgroundColor = `rgb(240,240,240)`;
        }
        else {
            e.target.style.backgroundColor = 'black';
        }
    }
    else {
        if (greyscaleCheck.checked) {
            let rgb = rgbToInt(e.target.style.backgroundColor);
            rgb[0] = Math.max(rgb[0]*0.9, 0);
            rgb[1] = Math.max(rgb[1]*0.9, 0);
            rgb[2] = Math.max(rgb[2]*0.9, 0);
            e.target.style.backgroundColor = `rgb(${rgb[0]},
                                                  ${rgb[1]},
                                                  ${rgb[2]})`;
        }
        
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


