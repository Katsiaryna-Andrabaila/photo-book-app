import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { Photo } from '../api';

interface InitState {
    cards: Photo[];
}

const initialState: InitState = {
    cards: [],
};

export const setCardsStateSlice = createSlice({
    name: 'cardsState',
    initialState,
    reducers: {
        setCardsState: (state, action: PayloadAction<Photo[]>) => {
            state.cards = action.payload;
        },
    },
});

export default setCardsStateSlice.reducer;
export const { setCardsState } = setCardsStateSlice.actions;
