import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface InitState {
    limit: number;
}

const initialState: InitState = {
    limit: 50,
};

export const setLimitSlice = createSlice({
    name: 'limit',
    initialState,
    reducers: {
        setLimit: (state, action: PayloadAction<number>) => {
            state.limit = action.payload;
        },
    },
});

export default setLimitSlice.reducer;
export const { setLimit } = setLimitSlice.actions;
