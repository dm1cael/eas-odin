const boardContainer = document.querySelector('.board-container');

function createGrid(size) {
    let boardSize = 520;
    let cellSize = boardSize / size;

    for(let i = 0; i < size; i++) {
        const rowGridCell = document.createElement('div');
        rowGridCell.classList = 'drawable drawable-bg';
        rowGridCell.style.display = 'flex';
        rowGridCell.style.height =  `${cellSize}px`;

        for(let j = 0; j < size; j++) {
            const columnGridCell = document.createElement('div');
            columnGridCell.classList = 'drawable drawable-item';
            columnGridCell.style.width =  `${cellSize}px`;

            rowGridCell.appendChild(columnGridCell)
        }

        boardContainer.appendChild(rowGridCell);
    }
}

createGrid(16);

/* End Grid Creation */

function registerDrawableEvent() {
    const drawableItem = document.querySelectorAll('.drawable-item');

    drawableItem.forEach((item) => {
        item.addEventListener('mouseover', () => {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);

            item.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        })
    });   
}

registerDrawableEvent();

/* End Drawable Interaction */

const sizeBtn = document.querySelector("#size-btn");
sizeBtn.addEventListener('click', () => resizeGrid());

function resizeGrid() {
    deleteGrid();

    let size = prompt('Which size do you want? [Minimum: 1 | Max: 100]')
    if(size < 0) createGrid(1);
    else if(size > 100) createGrid(100);
    else createGrid(size);

    registerDrawableEvent();
}

function deleteGrid() {
    const drawables = document.querySelectorAll('.drawable');

    drawables.forEach((drawable) => {
        drawable.remove();
    });
}