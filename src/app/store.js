import { configureStore } from "@reduxjs/toolkit";
import generalReducer from "./features/generalSlice";
import transactionReducer from "./features/transactionSlice";

export const store = configureStore({
    reducer: {
        general: generalReducer,
        transaction: transactionReducer,
    },
});
