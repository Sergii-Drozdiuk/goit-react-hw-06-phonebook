import { createSlice } from '@reduxjs/toolkit';
import { initialData } from '../InitialData';

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialData.filterValue,
  reducers: {
    changeFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const getFilter = state => state.filter;
export const filterReducer = filterSlice.reducer;
export const { changeFilter } = filterSlice.actions;
