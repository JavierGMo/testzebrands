import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface MenuOptionSearchState {
  value: string;
}
  
const initialState: MenuOptionSearchState = {
  value: '',
}
  
export const menuOptionSearchSlice = createSlice({
  name: 'menuOptionSearch',
  initialState,
  reducers: {
    optionSearch: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    }
  },
});

export const { optionSearch } = menuOptionSearchSlice.actions

export default menuOptionSearchSlice.reducer