import axios from 'axios';

const instance = axios.create({
  baseURL = 'http://youtube.com/';
});

export default instance;
