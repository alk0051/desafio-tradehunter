import express, { response } from 'express';
import request from 'request';
import api_key from '../secret'
  

const routes = express.Router();

const stocksTicker = "AAPL";

const urlTickerDetails = `https://api.polygon.io/v1/meta/symbols/${stocksTicker}/company?&apiKey=${api_key}`

const urlDailyOpenClose = `https://api.polygon.io/v1/open-close/${stocksTicker}/2021-03-24?unadjusted=true&apiKey=${api_key}`

const tickerDetails =  routes.get('/tickerDetails', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  request(urlTickerDetails, (error, response, body) => {
    if (error) {
      throw new Error(error);
    }
    res.send(body);
  });
});

const DailyOpenClose = routes.get('/dailyOpenClose', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  request(urlDailyOpenClose, (error, response, body) => {
    if (error) {
      throw new Error(error);
    }
    res.send(body);
  });
});


export default routes;
