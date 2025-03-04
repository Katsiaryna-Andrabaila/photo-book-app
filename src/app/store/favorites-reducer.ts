import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { Photo } from '../api';

interface InitState {
    favorites: Photo[];
}

const initialState: InitState = {
    favorites: [],
};

export const setFavoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        setFavorites: (state, action: PayloadAction<Photo[]>) => {
            state.favorites = action.payload;
        },
    },
});

export default setFavoritesSlice.reducer;
export const { setFavorites } = setFavoritesSlice.actions;
