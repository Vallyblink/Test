import express from 'express';
import authRoutes from './routes/auth.js';
import dataRoutes from './routes/dataRoutes.js';

const app = express();

app.use(express.json());

app.use('/', authRoutes);
app.use('/data', dataRoutes);

const PORT = 5432;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});