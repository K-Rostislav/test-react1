export type CartItem = {
    id: string;
    name: string;
    price: number;
    img: string;
    category: number;
    count: number;
}

export interface CartSliceState {
    count: number;
    items: CartItem[];
}

  