import axios from 'axios'
const env = process.env.ENV
require('dotenv').config({ path: `.env.${env}` })
axios.defaults.headers['Content-Type'] ='application/json';
axios.defaults.headers['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers['Accept'] = 'application/json';

export const httpClient = axios.create({ 
  timeout: 5000,
  baseURL: process.env.BASE_URL
});
