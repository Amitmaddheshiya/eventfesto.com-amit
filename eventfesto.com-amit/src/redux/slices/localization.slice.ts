"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lang: "en",
};

const langSlice = createSlice({
  name: "localization",
  initialState,
  reducers: {
    updateLanguage(state, action) {
      localStorage.setItem("language", action.payload);
      state.lang = action.payload;
    },
  },
});

export const { updateLanguage } = langSlice.actions;
export default langSlice.reducer;
