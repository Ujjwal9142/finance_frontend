import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './state/root';

const store = configureStore({
  reducer: rootReducer,
});

export default store;
