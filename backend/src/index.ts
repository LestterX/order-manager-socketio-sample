import { serverHttp } from './server/server';

const PORT = process.env.PORT || 5050;

serverHttp.listen(PORT, () => {
  console.log('Server Running ');
});