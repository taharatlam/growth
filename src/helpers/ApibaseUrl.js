
import axios from 'axios';


const api = axios.create({
  baseURL: 'https://techmatrick.com/algoquant', // Replace with your actual base URL
});

export default api;
