import {useEffect, useState} from "react";
import {Product} from "../models/Product.ts";
import {fetchProducts} from "../fetch/fetchProducts.ts";
import {Link} from "react-router-dom";
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card.tsx";
import {Button} from "@/components/ui/button.tsx";

export const Home = () => {
    const [products, setProducts] = useState<Product[]>([]);

    const loadProducts = async () => {
        try {
            const response = await fetchProducts();
            setProducts(response);
        } catch (error) {
            console.error("Impossible de charger les produits", error);
        }
    };

    useEffect(() => {
        loadProducts().then(r => console.log(r));
    }, []);

    return (
        <>
            <div className="container mx-auto p-8">
                <h1 className="text-3xl font-bold mb-6 text-center">Bienvenue chez nous !</h1>
                <p className="text-lg text-center mb-12">
                    Découvrez nos produits exceptionnels soigneusement sélectionnés pour vous.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <Card key={product.id} className="shadow-lg">
                            <CardHeader>
                                <img
                                    src={product.image_url}
                                    alt={product.name}
                                    className="w-full h-48 object-cover rounded-t-lg"
                                />
                            </CardHeader>
                            <CardContent>
                                <h2 className="text-xl font-semibold">{product.name}</h2>
                                <p className="text-gray-600 mt-2">{product.description}</p>
                            </CardContent>
                            <CardFooter className="flex justify-between items-center">
                                <span className="text-lg font-bold">{product.price} €</span>
                                <Button asChild>
                                    <Link to={`/product/${product.id}`}>Voir le produit</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </>
    );
};