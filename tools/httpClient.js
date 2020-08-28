import axios from 'axios'
const env = process.env.ENV
require('dotenv').config({ path: `.env.${env}` })
axios.defaults.headers['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers['Access-Control-Allow-Origin'] = '*';

export const httpClient = axios.create({ 
  timeout: 2000,
  baseURL: process.env.BASE_URL
});
