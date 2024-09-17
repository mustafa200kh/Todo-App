import { createSlice } from "@reduxjs/toolkit";

interface ITheme {
  siteMode: "dark" | "light";
}

const initialState: ITheme = {
  siteMode: "dark",
};
const theme = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.siteMode = action.payload;
    },
  },
});

export const { changeTheme } = theme.actions;

export default theme.reducer;
