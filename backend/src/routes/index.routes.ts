import express from 'express';
import companyInfoRoutes from './company_info.routes';
import tickerInfo from './ticker_info.routes';

const routes = express.Router();

routes.use(companyInfoRoutes);
routes.use(tickerInfo);


export default routes;