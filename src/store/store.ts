import { configureStore } from '@reduxjs/toolkit';
import { selectedCardsSlice } from './selected.slice';
import { saveState } from './storage';
import { SELECTED_CARDS_KEY } from '../constant';
import { PROFILES_PERSISTENT_STATE, profilesSlice } from './profiles.slice';

export const store = configureStore({ // централизованное хранилище
  reducer: {
    selected: selectedCardsSlice.reducer,
    profiles: profilesSlice.reducer
  },
});

store.subscribe(() => {
  const selectedCards = store.getState().selected;
  saveState(selectedCards, SELECTED_CARDS_KEY);

  const profiles = store.getState().profiles;
  saveState(profiles, PROFILES_PERSISTENT_STATE);
})

export type AppRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
