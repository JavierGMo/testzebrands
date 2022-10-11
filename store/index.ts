import { configureStore } from '@reduxjs/toolkit';

import searchesReducer from './slices/searches/searchesSlice'
import menuOptionSearchReducer from './slices/menus/menuOptionSearchSlice';
import counterPaginationReducer  from './slices/counters/counterPaginationSlice';
import showLoaderReducer from './slices/loaders/simpleLoaderSlice';

export const store = configureStore({
    reducer: {
        shearches: searchesReducer,
        menuOptionSearch: menuOptionSearchReducer,
        counterPagination: counterPaginationReducer,
        showingLoader: showLoaderReducer
    },
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;