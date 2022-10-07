import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface SearchesState {
    value: string;
  }
  
  const initialState: SearchesState = {
    value: '',
  }
  
  export const searchesSlice = createSlice({
    name: 'searches',
    initialState,
    reducers: {
      newSearch: (state, action: PayloadAction<string>) => {
        state.value = action.payload;
      }
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { newSearch } = searchesSlice.actions
  
  export default searchesSlice.reducer