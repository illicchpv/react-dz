import { configureStore } from "@reduxjs/toolkit";
import { selectedCardsSlice } from "./selected.slice";
import { saveState } from "./storage";
import { SELECTED_CARDS_KEY } from "../constant";

export const store = configureStore({ // централизованное хранилище
  reducer: {
    selected: selectedCardsSlice.reducer
  },
});

store.subscribe(() => {
  const selectedCards = store.getState().selected //.selectedCards // as any //.selectedCards // .selectedCards.map(card => { return { ...card } });
  saveState(selectedCards, SELECTED_CARDS_KEY);
})

export type AppRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
