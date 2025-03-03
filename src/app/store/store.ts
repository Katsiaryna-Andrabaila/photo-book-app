import { configureStore } from '@reduxjs/toolkit';

const setupStore = () =>
    configureStore({
        reducer: {},
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware()
    });

export const store = setupStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
