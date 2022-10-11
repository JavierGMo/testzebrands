import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterPaginationState {
  totalItems: number;
  currentPage: number;
}
  
const initialState: CounterPaginationState = {
  totalItems: 0,
  currentPage: 0,
}
  
export const counterPaginationSlice = createSlice({
  name: 'counterPagination',
  initialState,
  reducers: {
    totalItems: (state, action: PayloadAction<number>) => {
      state.totalItems = action.payload;
    },
    currentPage: (state, action: PayloadAction<number>)=>{
        state.currentPage = action.payload;
    }
  },
});

export const { totalItems, currentPage } = counterPaginationSlice.actions

export default counterPaginationSlice.reducer