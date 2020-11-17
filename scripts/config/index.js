import dotenv from 'dotenv';


// const dotenv = require('dotenv');
dotenv.config();
export const movieapiConfig = {
  URL: process.env.MOVIE_API_URL
};