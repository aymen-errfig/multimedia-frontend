import {api} from "@/src/services/api.js";

export class ProductServices {
    static getProducts = async () => {
        const resp = await api.get("/products");
        return resp.data;
    }
    static reserveProduct = async (product_id) => {
        const resp = await api.post(`/products/${product_id}`);
        return resp.data;
    }
}