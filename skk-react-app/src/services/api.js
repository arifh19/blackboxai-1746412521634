import axios from 'axios';

const backendUrl = process.env.REACT_APP_BACKEND_URL;

const api = axios.create({
  baseURL: backendUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

// LSP API
export const getLSPData = async () => {
  const response = await api.get('/lsp');
  return response.data;
};

export const createLSP = async (data) => {
  const response = await api.post('/lsp', data);
  return response.data;
};

export const updateLSP = async (id, data) => {
  const response = await api.put(`/lsp/${id}`, data);
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
  const response = await api.post('/asosiasi', data);
  return response.data;
};

export const updateAsosiasi = async (id, data) => {
  const response = await api.put(`/asosiasi/${id}`, data);
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
  const response = await api.post('/lemdiklat', data);
  return response.data;
};

export const updateLemdiklat = async (id, data) => {
  const response = await api.put(`/lemdiklat/${id}`, data);
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
