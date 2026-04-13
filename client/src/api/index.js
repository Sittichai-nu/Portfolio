import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
});

export const getProfile = () => api.get('/profile/');
export const getSkills = () => api.get('/skills/');
export const getProjects = () => api.get('/projects/');
export const getExperience = () => api.get('/experience/');
export const getEducation = () => api.get('/education/');

export default api;
