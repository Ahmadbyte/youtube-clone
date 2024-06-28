// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5001/api',
});

export const register = (data) => api.post('/auth/register', data);
export const login = (data) => api.post('/auth/login', data);
export const uploadVideo = (data, config) => api.post('/videos/upload', data, config);
export const getVideos = () => api.get('/videos');

export default api;
   
