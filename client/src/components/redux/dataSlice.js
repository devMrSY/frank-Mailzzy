import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  csvData: [],
  htmlData: "",
  templatedata: "",
  csvHeader: [],
  targetUser: {},
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
    templatedata: (state, action) => {
      state.templatedata = action.payload;
    },
    targetUser: (state, action) => {
      state.targetUser = action.payload;
    },
  },
});

export const { csvData, htmlData, csvHeader, templatedata } = dataSlice.actions;

export default dataSlice.reducer;
