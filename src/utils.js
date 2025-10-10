const selectedCard = [2, 5];

export function markSelectedCards(cards) {

  return cards.map(card => {
    return  selectedCard.includes(card.id) ? {...card, selected: true} : card;
  });
}