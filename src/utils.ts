import type { ICard, ICardResp, IUserProfile } from './constant';

export function markSelectedCards(cards: ICard[], selectedCards: ICard[] = []) {
  return cards.map(card => {
    if (selectedCards.find(sel => sel.id === card.id)) return { ...card, selected: true };
    return card;
  });
}
export function markCards(cards: ICard[]) {
  return cards.map(card => {
    return { ...card, selected: true };
  });
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

export function decodeDuration(duration: string) {
  // PT3H1M
  try {
    const [hours, minutes] = duration.split('H');
    return `${Number(hours.replace('PT', '')) * 60 + Number(minutes.replace('M', ''))} мин`;
  } catch {
    return '';
  }
}