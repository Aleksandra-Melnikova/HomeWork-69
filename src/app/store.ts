import { configureStore } from "@reduxjs/toolkit";
import { serialsNameReducer } from '../store/slices/selialsNameSlices.ts';

export const store = configureStore({
  reducer: {
    serialsName: serialsNameReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
