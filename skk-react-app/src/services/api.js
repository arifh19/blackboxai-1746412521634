import axios from 'axios';

const backendUrl = process.env.REACT_APP_BACKEND_URL;

const api = axios.create({
  baseURL: backendUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

const login = async (email, password) => {
  const response = await api.post('/auth/login', { email, password });
  return response.data;
};

const checkAuth = async (accessToken) => {
  const response = await api.get('/auth/check-auth', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
};

const changePassword = async (accessToken, currentPassword, newPassword) => {
  const response = await api.patch(
    '/auth/login',
    { currentPassword, password: newPassword },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return response.data;
};

export default {
  login,
  checkAuth,
  changePassword,
};
