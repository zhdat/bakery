import {Category} from "./Category.ts";

export type Product = {
    id: string;
    name: string;
    description: string;
    price: number;
    image_url: string;
    category: Category;
    available: boolean;
    created_at: Date;
}