import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { SELECTED_CARDS_KEY, type ICard } from '../constant';
import { loadState } from './storage';

export interface ISelectedCardsState {
  selectedCards: ICard[];
}

const initialState: ISelectedCardsState = {
  selectedCards: loadState<ISelectedCardsState>(SELECTED_CARDS_KEY)?.selectedCards || []
}

export const selectedCardsSlice = createSlice({
  name: 'selectedCards',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<ICard>) => {
      const prevSelected = state.selectedCards.find(card => card.id === action.payload.id && card.userName === action.payload.userName);
      if(!prevSelected){
        state.selectedCards.push(action.payload)
      } else {
        state.selectedCards = state.selectedCards.filter(card => card.id !== action.payload.id || card.userName !== action.payload.userName);
      }
      // console.log('state.selectedCards: ', state.selectedCards.map(card => { return { ...card } }));
    },
  }
})

export default selectedCardsSlice.reducer
export const selectedCardsActions = selectedCardsSlice.actions
