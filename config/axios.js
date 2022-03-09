import axios from 'axios';

const httpRequest = axios.create({
  baseURL: 'https://hello-world-vercel-tau.vercel.app:3001',
});

export default httpRequest;
