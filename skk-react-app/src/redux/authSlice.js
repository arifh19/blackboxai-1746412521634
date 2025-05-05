import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../services/api';

const initialState = {
  user: null,
  authTokens: null,
  loading: false,
  error: null,
};

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const data = await api.login(email, password);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || 'Login failed');
    }
  }
);

export const fetchUser = createAsyncThunk(
  'auth/fetchUser',
  async (accessToken, { rejectWithValue }) => {
    try {
      const userData = await api.checkAuth(accessToken);
      return userData;
    } catch (error) {
      return rejectWithValue(error.message || 'Fetch user failed');
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logoutUser(state) {
      state.user = null;
      state.authTokens = null;
      state.loading = false;
      state.error = null;
      localStorage.removeItem('authTokens');
    },
    setAuthTokens(state, action) {
      state.authTokens = action.payload;
      localStorage.setItem('authTokens', JSON.stringify(action.payload));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.authTokens = action.payload;
        localStorage.setItem('authTokens', JSON.stringify(action.payload));
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.user = null;
        state.authTokens = null;
        localStorage.removeItem('authTokens');
      });
  },
});

export const { logoutUser, setAuthTokens } = authSlice.actions;

export default authSlice.reducer;
