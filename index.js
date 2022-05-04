let naTahu = 'circle';
const hrac = document.querySelector('.tlacitko');

const btnElm = document.querySelectorAll('.policka-container button');

const hra = (event) => {
  if (event.target.classList.length == 0) {
    event.target.disabled = true;
    if (naTahu === 'circle') {
      naTahu = 'cross';
      event.target.classList.add('board__field--circle');
      hrac.src = 'cross.svg';
      hrac.alt = 'krizek';
    } else {
      naTahu = 'circle';
      event.target.classList.add('board__field--cross');
      hrac.src = 'circle.svg';
      hrac.alt = 'kolecko';
    }
  }
};

for (let i = 0; i < btnElm.length; i++) {
  btnElm[i].addEventListener('click', hra);
}
//ukol 5.
const getSymbol = (field) => {
  if (field.classList.contains('board__field--cross')) {
    return 'cross';
  } else if (field.classList.contains('board__field--circle')) {
    return 'circle';
  }
};
console.log(getSymbol(document.querySelector('.policka-container button')));

const boardSize = 10;
const fields = document.querySelectorAll('.policka-container button');
const getField = (row, column) => {
  return fields[row * boardSize + column];
};

console.log(getField(2, 5));

const getPosition = (field) => {
  let fieldIndex = 0;
  while (fieldIndex < fields.length && field !== fields[fieldIndex]) {
    fieldIndex++;
  }

  return {
    row: Math.floor(fieldIndex / boardSize),
    column: fieldIndex % boardSize,
  };
};

const symbolsToWin = 5;
const isWinningMove = (field) => {
  const origin = getPosition(field);
  const symbol = getSymbol(field);

  let i;
  let inRow = 1;
  i = origin.column;
  while (i > 0 && symbol === getSymbol(getField(origin.row, i - 1))) {
    inRow++;
    i--;
  }

  i = origin.column;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(origin.row, i + 1))
  ) {
    inRow++;
    i++;
  }

  if (inRow >= symbolsToWin) {
    return true;
  }

  let inColumn = 1;
  i = origin.row;
  while (i > 0 && symbol === getSymbol(getField(i - 1, origin.column))) {
    inColumn++;
    i--;
  }

  i = origin.row;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(i + 1, origin.column))
  ) {
    inColumn++;
    i++;
  }

  if (inColumn >= symbolsToWin) {
    return true;
  }

  return false;
};

let tvojeHra = 'circle';
const turn = document.querySelector('.kontrolky');
const move = (event) => {
  if (tvojeHra === 'circle') {
    event.target.disabled = true;
    event.target.classList.add('board__field--circle');
    tvojeHra = 'cross';
    turn.src = 'img/cross.svg';
  } else {
    event.target.disabled = true;
    tvojeHra = 'circle';
    event.target.classList.add('board__field--cross');
    turn.src = 'img/circle.svg';
  }
  const winningPlayer = isWinningMove(event.target);
  if (winningPlayer) {
    const symbol = getSymbol(event.target);
    if (confirm(`Hráč s ${symbol} vyhrál. Chcete hrát znovu?`) === true) {
      location.reload();
    }

    setTimeout(function () {
      if (confirm(`Hráč s ${symbol} vyhrál. Chcete hrát znovu?`) === true) {
        location.reload();
      }
    }, 200);
  }
};

const gameFieldBtn = document.querySelectorAll('.policka-container button');
for (let i = 0; i < gameFieldBtn.length; i += 1) {
  gameFieldBtn[i].addEventListener('click', move);
}
