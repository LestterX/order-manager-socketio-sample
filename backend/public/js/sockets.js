const socket = io('http://localhost:5050');
const cards = document.querySelector('#cards');

let user = 'Carlos'

socket.emit('get cards', user);
socket.on('get cards', (cards) => {
  
})