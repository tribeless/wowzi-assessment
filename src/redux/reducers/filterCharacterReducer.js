import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  filters: {Name: '', Species: '', Status: '', Gender: ''},
};

const filterCharacterReducer = createSlice({
  name: 'filterCharacterReducer',
  initialState,
  reducers: {
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
  },
});

export const {setFilters} = filterCharacterReducer.actions;

export default filterCharacterReducer.reducer;
