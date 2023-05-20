import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  csvData: "",
  htmlData: "",
  csvHeader: [],
};

// const state = store.getState();

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    csvData: (state, action) => {
      state.csvData = action.payload;
    },
    csvHeader: (state, action) => {
      state.csvHeader = action.payload;
    },
    htmlData: (state, action) => {
      state.htmlData = action.payload;
    },
  },
});

export const { csvData, htmlData, csvHeader } = dataSlice.actions;

export default dataSlice.reducer;
