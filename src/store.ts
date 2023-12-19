import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import {technoHubApi} from "./services/technoHubApi.ts";

export const store = configureStore({
    reducer: {
        [technoHubApi.reducerPath]: technoHubApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(technoHubApi.middleware),
})

setupListeners(store.dispatch)