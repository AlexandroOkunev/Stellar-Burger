import { TIngredient, TOrder, TUser } from './types';

export const MOCK_INGREDIENTS: TIngredient[] = [
  {
    _id: 'bun1',
    name: 'Краторная булка N-200i',
    type: 'bun',
    proteins: 80,
    fat: 24,
    carbohydrates: 53,
    calories: 340,
    price: 1255,
    image: 'https://code.s3.yandex.net/react/code/bun-02.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
    image_large: 'https://code.s3.yandex.net/react/code/bun-02.png'
  },
  {
    _id: 'bun2',
    name: 'Флюоресцентная булка R2-D3',
    type: 'bun',
    proteins: 44,
    fat: 26,
    carbohydrates: 71,
    calories: 386,
    price: 988,
    image: 'https://code.s3.yandex.net/react/code/bun-01.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/bun-01-mobile.png',
    image_large: 'https://code.s3.yandex.net/react/code/bun-01.png'
  },
  {
    _id: 'main1',
    name: 'Говяжий метеорит (отбивная)',
    type: 'main',
    proteins: 800,
    fat: 800,
    carbohydrates: 300,
    calories: 2674,
    price: 3000,
    image: 'https://code.s3.yandex.net/react/code/meat-04.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/meat-04-mobile.png',
    image_large: 'https://code.s3.yandex.net/react/code/meat-04.png'
  },
  {
    _id: 'main2',
    name: 'Мясо синтетины, или Кризисный год',
    type: 'main',
    proteins: 82,
    fat: 30,
    carbohydrates: 10,
    calories: 382,
    price: 825,
    image: 'https://code.s3.yandex.net/react/code/meat-03.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/meat-03-mobile.png',
    image_large: 'https://code.s3.yandex.net/react/code/meat-03.png'
  },
  {
    _id: 'main3',
    name: 'Хрустящие марсианские щупальца',
    type: 'main',
    proteins: 10,
    fat: 10,
    carbohydrates: 10,
    calories: 100,
    price: 300,
    image: 'https://code.s3.yandex.net/react/code/sp_1.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/sp_1-mobile.png',
    image_large: 'https://code.s3.yandex.net/react/code/sp_1.png'
  },
  {
    _id: 'sauce1',
    name: 'Соус Spicy-X',
    type: 'sauce',
    proteins: 30,
    fat: 20,
    carbohydrates: 40,
    calories: 30,
    price: 90,
    image: 'https://code.s3.yandex.net/react/code/sauce-04.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/sauce-04-mobile.png',
    image_large: 'https://code.s3.yandex.net/react/code/sauce-04.png'
  },
  {
    _id: 'sauce2',
    name: 'Соус фирменный Space',
    type: 'sauce',
    proteins: 40,
    fat: 40,
    carbohydrates: 10,
    calories: 30,
    price: 1000,
    image: 'https://code.s3.yandex.net/react/code/sauce-02.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/sauce-02-mobile.png',
    image_large: 'https://code.s3.yandex.net/react/code/sauce-02.png'
  }
];

export const MOCK_USER: TUser = {
  email: 'demo@stellar.ru',
  name: 'Space Burger'
};

export const MOCK_FEED = {
  success: true,
  orders: [
    {
      _id: 'o1',
      status: 'done',
      name: 'Флюоресцентный',
      createdAt: '2026-11-22T09:00:00.000Z',
      updatedAt: '2026-11-22T09:05:00.000Z',
      number: 57123,
      ingredients: ['bun1', 'main1', 'bun1']
    },
    {
      _id: 'o2',
      status: 'pending',
      name: 'Космический',
      createdAt: '2026-11-22T08:30:00.000Z',
      updatedAt: '2026-11-22T08:30:00.000Z',
      number: 57124,
      ingredients: ['bun2', 'main2', 'sauce1', 'bun2']
    },
    {
      _id: 'o3',
      status: 'done',
      name: 'Незабудка',
      createdAt: '2026-11-22T07:15:00.000Z',
      updatedAt: '2026-11-22T07:20:00.000Z',
      number: 57125,
      ingredients: ['bun1', 'main3', 'sauce2', 'bun1']
    }
  ] as TOrder[],
  total: 3,
  totalToday: 3
};

export const MOCK_AUTH_RESPONSE = {
  success: true,
  accessToken: 'mock-access-token',
  refreshToken: 'mock-refresh-token',
  user: MOCK_USER
};

export const MOCK_ORDER_RESPONSE = {
  success: true,
  order: {
    _id: 'new1',
    status: 'pending',
    name: 'Космический',
    createdAt: '2026-11-22T10:00:00.000Z',
    updatedAt: '2026-11-22T10:00:00.000Z',
    number: 57126,
    ingredients: ['bun1', 'main1', 'bun1']
  },
  name: 'Космический'
};
