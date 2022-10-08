import { configureStore } from '@reduxjs/toolkit';

import searchesReducer from './slices/searches/searchesSlice'
import menuOptionSearchReducer from './slices/menus/menuOptionSearchSlice';

export const store = configureStore({
    reducer: {
        shearches: searchesReducer,
        menuOptionSearch: menuOptionSearchReducer
    },
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;