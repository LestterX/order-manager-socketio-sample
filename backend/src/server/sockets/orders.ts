import { serverHttp } from "../server";
import { Server } from 'socket.io';

let cards = [
  {
    cliente: "Lestter Gabriel",
    status: "Em Produção"
  },
  {
    cliente: "Lucas Pereira",
    status: "Entregue"
  },
  {
    cliente: "Luiz de Moraes",
    status: "Em Rota de Entrega"
  },
]

const io = new Server(serverHttp, {});

io.on('connection', (socket) => {
  console.log(`Usuário: ${socket.id} conectou [${new Date}]`);
  socket.on('disconnect', (something) => {
    console.log(`Usuário: ${socket.id} desconectou [${new Date}]`);
  })

  socket.on('get cards', (user) => {
    socket.emit('get cards', cards)
    console.log(user);
  })

})
