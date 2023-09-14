import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => {
  res.send('Acesse: <a href="/index.html">index.html</a>');
});

export { routes };