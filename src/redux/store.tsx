"use client";

import { configureStore } from "@reduxjs/toolkit";
import localizationSlice from "./slices/localization.slice";

export const reduxStore = () => {
  return configureStore({
    reducer: { language: localizationSlice },
  });
};

// Infer the type of reduxStore
export type AppStore = ReturnType<typeof reduxStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
