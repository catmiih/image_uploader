import express from 'express';
const app = express();

import appRoutes from './routes';

var cors = require('cors')
app.use(cors())

app.use('/',appRoutes);

const PORT = 3333;
const HOST = '127.0.0.1';

app.listen(PORT, () => {
  console.log(`HTTP Server Running! http://${HOST}:${PORT}`);
});