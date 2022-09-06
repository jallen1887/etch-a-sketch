function createGrid(gridBoxNumber) {
    const gridContainer = document.querySelector('#grid-container');
    
    for (let i = 0; i < gridBoxNumber**2; i++) {
        const gridBox = document.createElement('div');
        gridBox.classList.add('grid-box');

        gridBox.style.width = findGridBoxSize(gridBoxNumber);
        gridBox.style.height = findGridBoxSize(gridBoxNumber);
        gridContainer.appendChild(gridBox);
        gridBox.addEventListener('mousedown', () => gridBox.style.backgroundColor = 'blue');
    }


}

function findGridBoxSize(gridBoxNumber){
    let sizeNumber = document.querySelector('#grid-container').offsetWidth / gridBoxNumber;
    let sizeText = `${sizeNumber}px`
    return sizeText;
}

createGrid(10);
