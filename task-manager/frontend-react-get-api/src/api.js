import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000', // Replace with your API's host and port
  timeout: 10000, // Set a timeout for requests if needed
  // You can also set headers, interceptors, and other configuration options here
});

export default api;