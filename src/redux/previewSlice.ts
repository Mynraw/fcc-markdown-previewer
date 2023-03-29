import { createSlice } from "@reduxjs/toolkit"

const previewSlice = createSlice({
    name: "preview",
    initialState: {
        text: "",
        prevTabMaxed: false,
        editTabMaxed: false,
    },
    reducers: {
        getPreview: (state, action) => {
            state.text = action.payload;
        },
        minMaxPrevTab: (state) => {
            state.prevTabMaxed = !state.prevTabMaxed;
        },
        minMaxEditTab: (state) => {
            state.editTabMaxed = !state.editTabMaxed;
        }
    }
});

export const { getPreview, minMaxPrevTab, minMaxEditTab} = previewSlice.actions;
export default previewSlice.reducer;