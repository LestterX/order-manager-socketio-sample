import { createServer } from 'http';
import express from 'express';
import path from 'path';
import 'dotenv/config';

const app = express()
app.use(express.static(path.resolve(__dirname, '..', '..', 'public')))

const serverHttp = createServer(app);
import './sockets/orders'; //TEM QUE SER IMPORTADO APÓS O serverHTTP

export { serverHttp }