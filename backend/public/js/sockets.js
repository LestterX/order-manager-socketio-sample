/* eslint-disable no-undef */
const orderOptions = document.querySelector('.orderOptions');
const addOrderButton = document.querySelector('#add-order button');
const clientNameSearch = document.querySelector('#client');

const socket = io();
const cardsSec = document.querySelector('#cards');

let user = 'Carlos';

socket.emit('get cards', user);
socket.on('get cards', (cards) => {
  try {
    const allcards = document.querySelectorAll('.card');
    if (allcards.length > 0) {
      for (let c in allcards) {
        allcards[c].remove();
      }
    }
  } catch (e) {
    new Error('Erro ao remover Cards', e);
  }

  let index = 0;
  for (let card in cards) {
    createCard(cards[card].cliente, cards[card].status, index);
    index++;
  }
});

const createCard = (cliente, status, index) => {
  let statusValue = 'producao';
  let cardColor = 'red';
  switch (status) {
  case 'rota':
    status = 'A Caminho';
    statusValue = 'rota';
    cardColor = 'yellow';
    break;
  case 'entregue':
    status = 'Entregue';
    statusValue = 'entregue';
    cardColor = 'green';
    break;
  default:
    status = 'Produção';
    break;
  }

  console.log(status, ' || ', statusValue);

  let card = document.createElement('section');
  card.classList.add('card');
  card.style.backgroundColor = cardColor;
  let h3 = document.createElement('h3');
  h3.textContent = cliente;
  card.appendChild(h3);

  let select = document.createElement('select');
  select.classList.add(`index-${index}`);
  select.addEventListener('change', () => {
    let optionSelected = select.selectedIndex;
    const data = {
      index,
      optionSelected
    };
    socket.emit('update card', data);
  });

  let optionSelected = document.createElement('option');
  optionSelected.value = statusValue;
  optionSelected.textContent = status;
  select.appendChild(optionSelected);

  let option1 = document.createElement('option');
  option1.value = 'producao';
  option1.textContent = 'Produção';
  select.appendChild(option1);

  let option2 = document.createElement('option');
  option2.value = 'entregue';
  option2.textContent = 'Entregue';
  select.appendChild(option2);

  let option3 = document.createElement('option');
  option3.value = 'rota';
  option3.textContent = 'A Caminho';
  select.appendChild(option3);
  card.appendChild(select);

  cardsSec.appendChild(card);
};

clientNameSearch.addEventListener('keypress', (e) => {
  if(clientNameSearch.value){
    if(e.key === 'Enter'){
      addOrder();
    }
  }
});

orderOptions.addEventListener('change', () => {
  let value = orderOptions.selectedIndex;
  let bColor;
  switch (value) {
  case 1 | '1':
    bColor = 'yellow';
    break;
  case 2 | '2':
    bColor = 'green';
    break;
  default:
    bColor = 'red';
    break;
  }
  orderOptions.style.backgroundColor = bColor;
});

addOrderButton.addEventListener('click', (e) => {
  e.preventDefault();
  addOrder();
});

const addOrder = () => {

  alert();
};