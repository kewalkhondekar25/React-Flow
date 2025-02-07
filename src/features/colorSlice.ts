import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ColorState {
  openColorPickerNodeId: string | null;
}

const initialState: ColorState = {
  openColorPickerNodeId: null,
};


const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    openColor: (state, action: PayloadAction<string>) => {
      state.openColorPickerNodeId = action.payload === state.openColorPickerNodeId ? null : action.payload;
    },
    closeColor: (state) => {
      state.openColorPickerNodeId = null;
    }
  }
});

export const { openColor, closeColor } = colorSlice.actions;
export default colorSlice.reducer;