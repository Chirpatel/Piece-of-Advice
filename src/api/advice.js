//import {advice_url} from './default.json';

import axios from 'axios';
require('dotenv').config();
export const Advice = async () =>{
    const data =  await axios.get((process.env.advice_url))
    return data.data;
} 