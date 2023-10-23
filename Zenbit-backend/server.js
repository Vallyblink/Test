import express from 'express';
import bodyParser from 'body-parser';

import authRoutes from './routes/auth.js';
import dataRoutes from './routes/dataRoutes.js';

const app = express();
app.use(bodyParser.json())
app.use(express.json());

app.use('/', authRoutes);
app.use('/data', dataRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});