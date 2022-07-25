import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loading: true,
  isEnd: false,
  page: 1,
  error: '',
};

const characterReducer = createSlice({
  name: 'characterReducer',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setIsEnd: (state, action) => {
      state.isEnd = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {setIsEnd, setLoading, setPage, setError} =
  characterReducer.actions;

export default characterReducer.reducer;
