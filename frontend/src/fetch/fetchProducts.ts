import axios from "axios";
import {Product} from "../models/Product.ts";

export const fetchProducts = async (): Promise<Product[]> => {
    try {
        const response = await axios.get<Product[]>("http://127.0.0.1:8000/api/products");
        return response.data;
    } catch (error) {
        console.error("Erreur lors du chargement des produits", error);
        throw error;
    }
}