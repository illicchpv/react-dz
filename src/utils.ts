import type { ICard, ICardResp, IUserProfile } from './constant';

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

export function getLoginedUserFromLocalStorage(): string {
    const profiles: string | null = localStorage.getItem('user-profiles');
    if (!profiles) return '';
    try {
      const profilesArr: IUserProfile[] = JSON.parse(profiles);
      const profile = profilesArr.find(profile => profile.isLogined);
      return profile?.name || '';
    } catch {
      return ''
    }
}