import { configureStore } from '@reduxjs/toolkit';

// Placeholder for slices
// import authReducer from './auth/authSlice';
// import newsReducer from './news/newsSlice';

const store = configureStore({
  reducer: {
    // auth: authReducer,
    // news: newsReducer,
  },
});

export default store;
