const currencyTable = document.getElementById('mainTable');
const tableTitle = document.getElementById('table-title');
const leftArrowButton = document.getElementById('leftArrow');
const rightArrowButton = document.getElementById('rightArrow');

rightArrowButton.addEventListener('click', changeTable);
leftArrowButton.addEventListener('click', changeTable);

//Set defaul button table status
var tableState = 0;
leftArrowButton.style.opacity = '0.2';
leftArrowButton.style.cursor = 'default';

//set

function changeTable(e) {
  if (tableState == 0 && e.target.id == 'rightArrow') {
    rightArrowButton.style.opacity = '0.2';
    rightArrowButton.style.cursor = 'default';
    leftArrowButton.style.opacity = '1';
    leftArrowButton.style.cursor = 'pointer';
    tableState = 1;
    tableTitle.innerHTML = 'Comisiones';
    tableTitle.style.color = 'var(--secondary-blue)';
    currencyTable.rows[0].cells[0].innerHTML = 'Bitrade';
    currencyTable.rows[0].cells[1].innerHTML = '$12.96';
    currencyTable.rows[1].cells[0].innerHTML = 'Bitpreco';
    currencyTable.rows[1].cells[1].innerHTML = '$13.07';
    currencyTable.rows[2].cells[0].innerHTML = 'Novadax';
    currencyTable.rows[2].cells[1].innerHTML = '$13.15';
    currencyTable.rows[3].cells[0].innerHTML = 'Coinext';
    currencyTable.rows[3].cells[1].innerHTML = '$14.96';
  } else if (tableState == 1 && e.target.id == 'leftArrow') {
    rightArrowButton.style.opacity = '1';
    rightArrowButton.style.cursor = 'pointer';
    leftArrowButton.style.opacity = '0.2';
    leftArrowButton.style.cursor = 'default';
    tableState = 0;
    tableTitle.innerHTML = 'Monedas';
    tableTitle.style.color = 'var(--bitcon-orange)';
    currencyTable.rows[0].cells[0].innerHTML = 'Bitcoin';
    currencyTable.rows[0].cells[1].innerHTML =
      '$1.96<span class="down"></span>';
    currencyTable.rows[1].cells[0].innerHTML = 'Ethereum';
    currencyTable.rows[1].cells[1].innerHTML = '$0.07<span class="up"></span>';
    currencyTable.rows[2].cells[0].innerHTML = 'Ripple';
    currencyTable.rows[2].cells[1].innerHTML =
      '$2.15<span class="down"></span>';
    currencyTable.rows[3].cells[0].innerHTML = 'Stellar';
    currencyTable.rows[3].cells[1].innerHTML = '$4.96<span class="up"></span>';
  }
}
