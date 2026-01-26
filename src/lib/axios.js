import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 100000,
});

// pastikan tidak ada default content-type
delete api.defaults.headers.post['Content-Type'];

export default api;
