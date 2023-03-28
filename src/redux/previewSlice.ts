import { createSlice } from "@reduxjs/toolkit"

const previewSlice = createSlice({
    name: "preview",
    initialState: {
        text: "",
    },
    reducers: {
        getPreview: (state, action) => {
            state.text = action.payload;
        }
    }
});

export const { getPreview } = previewSlice.actions;
export default previewSlice.reducer;