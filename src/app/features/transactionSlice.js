import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sidebar: false,
    transactions: [],
    requestedTransactions: [],
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
        setRequestedTransactions: (state, action) => {
            state.requestedTransactions = action.payload;
        },
        setNewRequestedTransactions: (state, action) => {
            state.requestedTransactions = [action.payload, ...state.requestedTransactions];
        },
    },
});

export const {
    setTransactions,
    setNewTransaction,
    setRequestedTransactions,
    setNewRequestedTransactions,
} = transactionSlice.actions;

export default transactionSlice.reducer;
