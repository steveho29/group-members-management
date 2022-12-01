import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./authSlice";
import { toastifySlice } from "./toastifySlice";
import { loadingSlice } from "./loadingSlice";
import { userSlice } from "./userSlice";
import { groupSlice } from "./groupSlice";

export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        auth: authSlice.reducer,
        group: groupSlice.reducer,
        toastify: toastifySlice.reducer,
        isLoading: loadingSlice.reducer
    }
})
