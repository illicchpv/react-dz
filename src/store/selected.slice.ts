import { createSelector, createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { SELECTED_CARDS_KEY, type ICard } from '../constant';
import { loadState } from './storage';
import type { AppRootState } from './store';
import { currentSelectedProfile } from './profiles.slice';

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
    },
  }
})

export default selectedCardsSlice.reducer
export const selectedCardsActions = selectedCardsSlice.actions

export const selectedCardsForCurrentUser = createSelector(
  // 1. Массив входных селекторов - зависимости
  [
    currentSelectedProfile,                       // → возвращает IProfileItem | undefined
    (state: AppRootState) => state.selected.selectedCards // → возвращает Card[]
  ],
  // 2. Функция-трансформер - получает результаты входных селекторов
  (currentProfile, selectedCards) => {
    // currentProfile - результат currentSelectedProfile
    // selectedCards - результат state.selected.selectedCards
    return currentProfile 
      ? selectedCards.filter(card => card.userName === currentProfile.name)
      : [];
  }
);