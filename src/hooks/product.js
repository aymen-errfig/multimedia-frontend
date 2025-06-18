import {useState} from "react";
import {ProductServices} from "@/src/services/product.js";

export const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchProducts = async () => {
        setError(null);
        try {
            setLoading(true);
            const d = await ProductServices.getProducts();
            setProducts(d);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    const reserveProduct = async (id) => {
        try {
            setError(null);
            setLoading(true);
            const d = await ProductServices.reserveProduct(id);
            console.log(d);
        } catch (e) {
            setError(e.message);
            console.log(e);
        } finally {
            setLoading(false);
        }
    }

    return {
        products,
        loading,
        error,
        fetchProducts,
        reserveProduct
    }
}