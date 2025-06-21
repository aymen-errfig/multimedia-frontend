import { useState } from "react";
import { ProductServices } from "@/src/services/product.js";
import { toast } from "react-toastify";


export const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('');

    const fetchProducts = async () => {
        setError(null);
        try {
            setLoading(true);
            const d = await ProductServices.getProducts(filter, search);
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
            toast.success("Product reserved successfully");
            setProducts(products.map(product => 
                product.id === id ? { ...product, stock: stock - 1 } : product
            ));
        } catch (e) {
            setError(e.message);
            toast.error("Failed to reserve product: " + e.message);
        } finally {
            setLoading(false);
        }
    }

    return {
        products,
        loading,
        error,
        fetchProducts,
        reserveProduct,
        setFilter,
        setSearch,
        filter,
        search
    }
}