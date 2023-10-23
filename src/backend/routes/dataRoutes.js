import express from 'express';
import { getDataFromDatabase } from '../controllers/getdataController.js';

const dataRouter = express.Router();

dataRouter.get('/data', getDataFromDatabase);

export default dataRouter;
