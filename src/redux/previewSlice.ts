import { createSlice } from "@reduxjs/toolkit"

const previewSlice = createSlice({
    name: "preview",
    initialState: {
        text: "",
        tabMaxed: false,
    },
    reducers: {
        getPreview: (state, action) => {
            state.text = action.payload;
        },
        minMaxTab: (state) => {
            state.tabMaxed = !state.tabMaxed;
        }
    }
});

export const { getPreview, minMaxTab } = previewSlice.actions;
export default previewSlice.reducer;