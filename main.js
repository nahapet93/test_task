let matrix = [];
function createMatrix(n) {
    const matrix = [];
    for (let i = 0; i < n; i++) {
        const row = [];
        for (let j = 0; j < n; j++) {
            row[j] = Math.round(Math.random());
        }
        matrix[i] = row;
    }

    return matrix;
}

function generateTable(n) {
    matrix = createMatrix(n);
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");

    for (let i = 0; i < n; i++) {
        const row = document.createElement("tr");

        for (let j = 0; j < n; j++) {
            const cell = document.createElement("td");
            const cellText = document.createTextNode(matrix[i][j]);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }

        tblBody.appendChild(row);
    }

    tbl.appendChild(tblBody);
    document.getElementById('tableDiv').appendChild(tbl);
}

function findZeroCellsWithMoreThanTwoNonzeroNeighboursCount(matrix) {
    let zeroCellsCount = 0;
    let nonzeroNeighboursCount = 0;
    const n = matrix.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                if (matrix[i - 1]) {
                    nonzeroNeighboursCount += matrix[i - 1][j];
                }
                if (matrix[i + 1]) {
                    nonzeroNeighboursCount += matrix[i + 1][j];
                }
                if (matrix[i][j - 1]) {
                    nonzeroNeighboursCount += matrix[i][j - 1];
                }
                if (matrix[i][j + 1]) {
                    nonzeroNeighboursCount += matrix[i][j + 1];
                }
            }

            if (nonzeroNeighboursCount > 2) {
                zeroCellsCount++;
            }

            nonzeroNeighboursCount = 0;
        }
    }

    return zeroCellsCount;
}

generateTable(5);
const buttons = document.querySelectorAll('.btn');
const tds = document.getElementById('tableDiv').querySelectorAll('td');
const modalBody = document.getElementById('countModal').querySelector('.modal-body');

modalBody.innerText = findZeroCellsWithMoreThanTwoNonzeroNeighboursCount(matrix);
buttons.forEach(btn => btn.addEventListener('click', function () {
    tds.forEach(td => {
        td.setAttribute('style', 'background-color: yellow');
    });
}));