export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error',
}
  
export type ProductItem = {
    id: string;
    name: string;
    price: number;
    img: string;
    category: number;
    count: number;
}
  
export interface ProductsState {
    items: ProductItem[];
    status: Status;
}