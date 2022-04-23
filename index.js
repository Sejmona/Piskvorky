let naTahu = 'circle';
const hrac = document.querySelector('.tlacitko');

const btnElm = document.querySelectorAll('button');

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
