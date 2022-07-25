import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  item: {},
};

const characterDetailsReducer = createSlice({
  name: 'characterDetailsReducer',
  initialState,
  reducers: {
    setItem: (state, action) => {
      state.item = action.payload;
    },
  },
});

export const {setItem} = characterDetailsReducer.actions;

export default characterDetailsReducer.reducer;
