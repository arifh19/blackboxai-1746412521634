import axios from 'axios';

const backendUrl = process.env.REACT_APP_BACKEND_URL;

const api = axios.create({
  baseURL: backendUrl,
  headers: {
    'Content-Type': 'application/json',
  },
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
const getLSPData = async () => {
  const response = await api.get('/lsp');
  return response.data;
};

const createLSP = async (data) => {
  const payload = prepareFormData(data);
  const headers = data.logo instanceof File ? { 'Content-Type': 'multipart/form-data' } : { 'Content-Type': 'application/json' };
  const response = await api.post('/lsp', payload, { headers });
  return response.data;
};

const updateLSP = async (id, data) => {
  const payload = prepareFormData(data);
  const headers = data.logo instanceof File ? { 'Content-Type': 'multipart/form-data' } : { 'Content-Type': 'application/json' };
  const response = await api.put(`/lsp/${id}`, payload, { headers });
  return response.data;
};

const deleteLSP = async (id) => {
  const response = await api.delete(`/lsp/${id}`);
  return response.data;
};

// Asosiasi API
const getAsosiasiData = async () => {
  const response = await api.get('/asosiasi');
  return response.data;
};

const createAsosiasi = async (data) => {
  const payload = prepareFormData(data);
  const headers = data.logo instanceof File ? { 'Content-Type': 'multipart/form-data' } : { 'Content-Type': 'application/json' };
  const response = await api.post('/asosiasi', payload, { headers });
  return response.data;
};

const updateAsosiasi = async (id, data) => {
  const payload = prepareFormData(data);
  const headers = data.logo instanceof File ? { 'Content-Type': 'multipart/form-data' } : { 'Content-Type': 'application/json' };
  const response = await api.put(`/asosiasi/${id}`, payload, { headers });
  return response.data;
};

const deleteAsosiasi = async (id) => {
  const response = await api.delete(`/asosiasi/${id}`);
  return response.data;
};

// Lemdiklat API
const getLemdiklatData = async () => {
  const response = await api.get('/lemdiklat');
  return response.data;
};

const createLemdiklat = async (data) => {
  const payload = prepareFormData(data);
  const headers = data.logo instanceof File ? { 'Content-Type': 'multipart/form-data' } : { 'Content-Type': 'application/json' };
  const response = await api.post('/lemdiklat', payload, { headers });
  return response.data;
};

const updateLemdiklat = async (id, data) => {
  const payload = prepareFormData(data);
  const headers = data.logo instanceof File ? { 'Content-Type': 'multipart/form-data' } : { 'Content-Type': 'application/json' };
  const response = await api.put(`/lemdiklat/${id}`, payload, { headers });
  return response.data;
};

const deleteLemdiklat = async (id) => {
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
