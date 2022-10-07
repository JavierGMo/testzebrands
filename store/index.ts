import { configureStore } from '@reduxjs/toolkit';

import searchesReducer from './slices/searches/searchesSlice'

export const store = configureStore({
    reducer: {
        shearches: searchesReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;