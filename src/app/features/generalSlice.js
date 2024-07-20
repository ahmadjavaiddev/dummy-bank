import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sidebar: false,
    notifications: [],
};

export const generalSlice = createSlice({
    name: "general",
    initialState,
    reducers: {
        toggleSidebar: (state) => {
            state.sidebar = !state.sidebar;
        },
        setNotifications: (state, action) => {
            state.notifications = action.payload;
        },
        setNewNotification: (state, action) => {
            state.notifications = [action.payload, ...state.notifications];
        },
    },
});

export const { toggleSidebar, setNotifications, setNewNotification } = generalSlice.actions;

export default generalSlice.reducer;
