import { configureStore } from '@reduxjs/toolkit';

import { fetchPhotos } from '../api';
import { setCardsStateSlice } from './cards-reducer';

const setupStore = () =>
    configureStore({
        reducer: {
            cardsState: setCardsStateSlice.reducer,
            [fetchPhotos.reducerPath]: fetchPhotos.reducer,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(fetchPhotos.middleware)
    });

export const store = setupStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
