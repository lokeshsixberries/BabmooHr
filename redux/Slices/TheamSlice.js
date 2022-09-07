import { createSlice } from "@reduxjs/toolkit";

const initialTheam = {
  value: {
    background: "white",
    color: "black",
  },
};

export const theamSlice = createSlice({
  name: "Theam",
  initialState: initialTheam,
  reducers: {
    darkTheam: (state) => {
      state.value.background = "#201545";
      state.value.color = "white";
    },
    lightTheam: (state) => {
      state.value.background = "white";
      state.value.color = "#201545";
    },
  },
});

export const { darkTheam, lightTheam } = theamSlice.actions;
export default theamSlice.reducer;
