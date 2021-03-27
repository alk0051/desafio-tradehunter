import express, { Request, Response } from 'express';
import request from 'request';
import api_key from '../secret'
  

const routes = express.Router();

const companyInfo = routes.get('/companyInfo', (req: Request, res: Response) => {
  const tickerName = req.query.ticker;
  const urlCompanyDetails: string = `https://api.polygon.io/v1/meta/symbols/${tickerName}/company?&apiKey=${api_key}`

  res.setHeader('Access-Control-Allow-Origin', '*');
  request(urlCompanyDetails, (error: string, response: request.Response, body: any) => {
    if (error) {
      throw new Error(error);
    }
    if (response.statusCode == 404) {
      res.status(404);
    }
    res.send(body);
  });
});


export default companyInfo;
