import axios from 'axios';

const backendUrl = process.env.REACT_APP_BACKEND_URL;

const getAuthToken = () => {
  const tokens = localStorage.getItem('authTokens');
  if (!tokens) return null;
  try {
    const parsed = JSON.parse(tokens);
    return parsed.accessToken || null;
  } catch {
    return null;
  }
};

const api = axios.create({
  baseURL: backendUrl,
});

api.interceptors.request.use((config) => {
  const token = getAuthToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Helper to prepare FormData if logo is a File
const prepareFormData = (data) => {
  if (data.logo instanceof File) {
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }
    return formData;
  }
  return data;
};

// LSP API
export const getLSPData = async () => {
  const response = await api.get('/lsp');
  return response.data;
};

export const createLSP = async (data) => {
  const payload = prepareFormData(data);
  const headers = data.logo instanceof File ? { 'Content-Type': 'multipart/form-data' } : { 'Content-Type': 'application/json' };
  const response = await api.post('/lsp', payload, { headers });
  return response.data;
};

export const updateLSP = async (id, data) => {
  const payload = prepareFormData(data);
  const headers = data.logo instanceof File ? { 'Content-Type': 'multipart/form-data' } : { 'Content-Type': 'application/json' };
  const response = await api.put(`/lsp/${id}`, payload, { headers });
  return response.data;
};

export const deleteLSP = async (id) => {
  const response = await api.delete(`/lsp/${id}`);
  return response.data;
};

// Asosiasi API
export const getAsosiasiData = async () => {
  const response = await api.get('/asosiasi');
  return response.data;
};

export const createAsosiasi = async (data) => {
  const payload = prepareFormData(data);
  const headers = data.logo instanceof File ? { 'Content-Type': 'multipart/form-data' } : { 'Content-Type': 'application/json' };
  const response = await api.post('/asosiasi', payload, { headers });
  return response.data;
};

export const updateAsosiasi = async (id, data) => {
  const payload = prepareFormData(data);
  const headers = data.logo instanceof File ? { 'Content-Type': 'multipart/form-data' } : { 'Content-Type': 'application/json' };
  const response = await api.put(`/asosiasi/${id}`, payload, { headers });
  return response.data;
};

export const deleteAsosiasi = async (id) => {
  const response = await api.delete(`/asosiasi/${id}`);
  return response.data;
};

// Lemdiklat API
export const getLemdiklatData = async () => {
  const response = await api.get('/lemdiklat');
  return response.data;
};

export const createLemdiklat = async (data) => {
  const payload = prepareFormData(data);
  const headers = data.logo instanceof File ? { 'Content-Type': 'multipart/form-data' } : { 'Content-Type': 'application/json' };
  const response = await api.post('/lemdiklat', payload, { headers });
  return response.data;
};

export const updateLemdiklat = async (id, data) => {
  const payload = prepareFormData(data);
  const headers = data.logo instanceof File ? { 'Content-Type': 'multipart/form-data' } : { 'Content-Type': 'application/json' };
  const response = await api.put(`/lemdiklat/${id}`, payload, { headers });
  return response.data;
};

export const deleteLemdiklat = async (id) => {
  const response = await api.delete(`/lemdiklat/${id}`);
  return response.data;
};

export default {
  getLSPData,
  createLSP,
  updateLSP,
  deleteLSP,
  getAsosiasiData,
  createAsosiasi,
  updateAsosiasi,
  deleteAsosiasi,
  getLemdiklatData,
  createLemdiklat,
  updateLemdiklat,
  deleteLemdiklat,
};
