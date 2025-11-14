import type { ICard, ICardResp } from './constant';

const selectedCard = ['2', '5'];

export function markSelectedCards(cards: ICard[]) {

  return cards.map(card => {
    return selectedCard.includes(card.id) ? { ...card, selected: true } : card;
  });
}

export function getSelectedCards(cards: ICard[]) {
  return cards.filter(card => selectedCard.includes(card.id));
}

export function convertToCards(respCards: ICardResp[]): ICard[] | undefined {
  const rez = respCards.map(rc => {
    const name = rc['#TITLE'] + (rc['#YEAR'] ? ` (${rc['#YEAR']})` : '');
    const v: ICard = { id: rc['#IMDB_ID'], img: rc['#IMG_POSTER'], name: name, rating: rc['#RANK'], year: rc['#YEAR'] };
    return v;
  });
  return rez
}