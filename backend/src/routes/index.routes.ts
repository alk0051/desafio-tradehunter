import express from 'express';
import tickerDetailsRoutes from './ticker_details.routes';


const routes = express.Router();

routes.use(tickerDetailsRoutes);


export default routes;