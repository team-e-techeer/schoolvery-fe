import axios from 'axios';

const client = axios.create();

export const clientBaseURL = import.meta.env['VITE_API_URL'];

console.log('hi');
console.log('URL = ', clientBaseURL);

client.defaults.baseURL = clientBaseURL;
client.defaults.headers.options = {
  'Content-type': 'Application/json',
  Accept: '*/*',
};

export default client;
