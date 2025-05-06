import axios from 'axios';

const backendUrl = process.env.REACT_APP_BACKEND_URL;

const api = axios.create({
  baseURL: backendUrl,
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
export const getLSPData = async (accessToken) => {
  const response = await api.get('/lsp', {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  return response.data;
};

export const createLSP = async (data, accessToken) => {
  const payload = prepareFormData(data);
  const headers = data.logo instanceof File ? { 'Content-Type': 'multipart/form-data', Authorization: `Bearer ${accessToken}` } : { Authorization: `Bearer ${accessToken}` };
  const response = await api.post('/lsp', payload, { headers });
  return response.data;
};

export const updateLSP = async (id, data, accessToken) => {
  const payload = prepareFormData(data);
  const headers = data.logo instanceof File ? { 'Content-Type': 'multipart/form-data', Authorization: `Bearer ${accessToken}` } : { Authorization: `Bearer ${accessToken}` };
  const response = await api.put(`/lsp/${id}`, payload, { headers });
  return response.data;
};

export const deleteLSP = async (id, accessToken) => {
  const response = await api.delete(`/lsp/${id}`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  return response.data;
};

// Asosiasi API
export const getAsosiasiData = async (accessToken) => {
  const response = await api.get('/asosiasi', {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  return response.data;
};

export const createAsosiasi = async (data, accessToken) => {
  const payload = prepareFormData(data);
  const headers = data.logo instanceof File ? { 'Content-Type': 'multipart/form-data', Authorization: `Bearer ${accessToken}` } : { Authorization: `Bearer ${accessToken}` };
  const response = await api.post('/asosiasi', payload, { headers });
  return response.data;
};

export const updateAsosiasi = async (id, data, accessToken) => {
  const payload = prepareFormData(data);
  const headers = data.logo instanceof File ? { 'Content-Type': 'multipart/form-data', Authorization: `Bearer ${accessToken}` } : { Authorization: `Bearer ${accessToken}` };
  const response = await api.put(`/asosiasi/${id}`, payload, { headers });
  return response.data;
};

export const deleteAsosiasi = async (id, accessToken) => {
  const response = await api.delete(`/asosiasi/${id}`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  return response.data;
};

// Lemdiklat API
export const getLemdiklatData = async (accessToken) => {
  const response = await api.get('/lemdiklat', {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  return response.data;
};

export const createLemdiklat = async (data, accessToken) => {
  const payload = prepareFormData(data);
  const headers = data.logo instanceof File ? { 'Content-Type': 'multipart/form-data', Authorization: `Bearer ${accessToken}` } : { Authorization: `Bearer ${accessToken}` };
  const response = await api.post('/lemdiklat', payload, { headers });
  return response.data;
};

export const updateLemdiklat = async (id, data, accessToken) => {
  const payload = prepareFormData(data);
  const headers = data.logo instanceof File ? { 'Content-Type': 'multipart/form-data', Authorization: `Bearer ${accessToken}` } : { Authorization: `Bearer ${accessToken}` };
  const response = await api.put(`/lemdiklat/${id}`, payload, { headers });
  return response.data;
};

export const deleteLemdiklat = async (id, accessToken) => {
  const response = await api.delete(`/lemdiklat/${id}`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
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
