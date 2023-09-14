/* eslint-disable @typescript-eslint/no-unused-vars */
import { serverHttp } from '../server';
import { Server } from 'socket.io';

const cardOptions = ['producao', 'entregue', 'rota'];

const cards = [
  {
    cliente: 'Lestter Gabriel',
    status: 'rota'
  },
  {
    cliente: 'Lucas Pereira',
    status: 'entregue'
  },
  {
    cliente: 'Luiz de Moraes',
    status: 'producao'
  },
  {
    cliente: 'Daniel Luis',
    status: 'producao'
  },
  {
    cliente: 'Maria Oliveira',
    status: 'rota'
  },
  {
    cliente: 'Clara Alves',
    status: 'rota'
  },
];

const io = new Server(serverHttp, {});

io.on('connection', (socket) => {
  console.log(`Usuário: ${socket.id} conectou [${new Date}]`);
  socket.on('disconnect', (something) => {
    console.log(`Usuário: ${socket.id} desconectou [${new Date}]`);
  });

  socket.on('get cards', (user) => {
    socket.emit('get cards', cards);
    console.log(user);
  });

  socket.on('update card', (data) => {
    const option = cardOptions[data.optionSelected - 1];
    const client = cards[data.index];
    console.log(data);
    console.log(option);
    console.log(client);

    client.status = option;

    console.log(cards);

    io.emit('get cards', cards);
  });

  socket.on('add order', order => {
    console.log(order);
    
    cards.push(order);
    console.log(cards);
    
    io.emit('get cards', cards);
  });

});
