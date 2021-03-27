import express, { Request, Response } from 'express';
import request from 'request';
import api_key from '../secret'
  

const routes = express.Router();

const tickerInfo = routes.get('/tickerInfo', (req: Request, res: Response) => {
  const tickerName = req.query.ticker;
  const urlTickerDetails: string = `https://api.polygon.io/v1/open-close/${tickerName}/2021-03-24?unadjusted=true&apiKey=${api_key}`

  res.setHeader('Access-Control-Allow-Origin', '*');
  request(urlTickerDetails, (error: string, response: request.Response, body: any) => {
    if (error) {
      throw new Error(error);
    }
    if (response.statusCode == 404) {
      res.status(404);
    }
    res.send(body);
  });
});


export default tickerInfo;
