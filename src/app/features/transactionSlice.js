import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sidebar: false,
    transactions: [],
};

export const transactionSlice = createSlice({
    name: "transaction",
    initialState,
    reducers: {
        setTransactions: (state, action) => {
            state.transactions = action.payload;
        },
        setNewTransaction: (state, action) => {
            state.transactions = [action.payload, ...state.transactions];
        },
    },
});

export const { setTransactions, setNewTransaction } = transactionSlice.actions;

export default transactionSlice.reducer;
