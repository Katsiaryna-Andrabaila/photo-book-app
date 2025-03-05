import { configureStore } from '@reduxjs/toolkit';

import { fetchPhotos } from '../api';
import { setFavoritesSlice } from './favorites-reducer';
import { setLimitSlice } from './limit-reducer';

const setupStore = () =>
    configureStore({
        reducer: {
            favorites: setFavoritesSlice.reducer,
            limit: setLimitSlice.reducer,
            [fetchPhotos.reducerPath]: fetchPhotos.reducer,
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(fetchPhotos.middleware),
    });

export const store = setupStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
