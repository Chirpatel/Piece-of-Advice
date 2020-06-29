import {unsplash_url,client_id} from './default.json';
import axios from 'axios';
export const Image = async () =>{
    const data =  await axios.get((unsplash_url),{
        params:{
            client_id: client_id,
            orientation:"landscape",
            query: "Advice",
            content_filter: "high"
        }
    })
    return data.data;
} 