import type { ICard } from './constant';

const selectedCard = [2, 5];

export function markSelectedCards(cards: ICard[]) {

  return cards.map(card => {
    return selectedCard.includes(card.id) ? { ...card, selected: true } : card;
  });
}

export function getSelectedCards(cards: ICard[]) {
  return cards.filter(card => selectedCard.includes(card.id));
}