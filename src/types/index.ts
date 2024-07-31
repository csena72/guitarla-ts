import { CartItem, Guitar, GuitarId } from './index';

export type Guitar = {
    id: number;
    name: string;
    image: string;
    description: string;
    price: number;
  };

  export type CartItem = Guitar & {
    quantity: number;
  };

