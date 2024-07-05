import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sidebar: false,
};

export const generalSlice = createSlice({
    name: "general",
    initialState,
    reducers: {
        toggleSidebar: (state) => {
            state.sidebar = !state.sidebar;
        },
    },
});

export const { toggleSidebar } = generalSlice.actions;

export default generalSlice.reducer;
