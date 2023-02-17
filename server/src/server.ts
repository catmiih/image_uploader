import express from 'express';

const app = express();

import appRoutes from './routes';
app.use('/',appRoutes);

const PORT = 3000;
const HOST = '127.0.0.1';

app.listen(PORT, () => {
  console.log(`HTTP Server Running! http://${HOST}:${PORT}`);
});