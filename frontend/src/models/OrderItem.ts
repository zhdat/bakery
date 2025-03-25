import {Order} from "./Order.ts";
import { Product } from "./Product.ts";

export type OrderItem = {
    id: string;
    order: Order;
    product: Product;
    quantity: number;
    subtotal: number;
}