export interface Message {
  message: string;
}

export interface Product {
  id: number,
  name: string,
  description: string,
  price: number
}

export interface Cart {
  id: number,
  productId: number
}

export interface DisplayCart {
  id: number,
  product: {
    id: number,
    name: string,
    description: string,
    price: number
  }
  quantity: number
}