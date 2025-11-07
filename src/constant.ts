export const API_URL = 'https://search.imdbot.workers.dev/';

export interface ICard {
  selected?: boolean,
  id: string,
  img: string,
  name: string,
  rating: number,
  year?: number
};

export interface ICardResp {
  '#IMDB_ID': string,
  '#IMG_POSTER': string,
  '#TITLE': string,
  '#RANK': number,
  '#YEAR': number,
};

export interface IUserProfile {
  name: string,
  isLogined: boolean
}

export const CARDS: ICard[] = [
  {
    'id': '1',
    'img': '1.jpg',
    'name': 'Black Widow',
    'rating': 324
  },
  {
    'id': '2',
    'img': '2.jpg',
    'name': 'Shang Chi',
    'rating': 124
  },
  {
    'id': '3',
    'img': '3.jpg',
    'name': 'Loki',
    'rating': 235
  },
  {
    'id': '4',
    'img': '4.jpg',
    'name': 'How I Met Your Mother',
    'rating': 123
  },
  {
    'id': '5',
    'img': '5.jpg',
    'name': 'Money Heist',
    'rating': 8125
  },
  {
    'id': '6',
    'img': '6.jpg',
    'name': 'Friends',
    'rating': 123
  },
  {
    'id': '7',
    'img': '7.jpg',
    'name': 'The Big Bang Theory',
    'rating': 12
  },
  {
    'id': '8',
    'img': '8.jpg',
    'name': 'Two And a Half Men',
    'rating': 456
  }
];
