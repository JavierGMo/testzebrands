import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface SimpleLoaderState {
  show: boolean;
}
  
const initialState: SimpleLoaderState = {
    show: false,
}
  
export const simpleLoaderSlice = createSlice({
  name: 'simpleLoader',
  initialState,
  reducers: {
    showLoader: (state, action: PayloadAction<boolean>)=>{
        state.show = action.payload;
    }
  },
});

export const { showLoader } = simpleLoaderSlice.actions

export default simpleLoaderSlice.reducer