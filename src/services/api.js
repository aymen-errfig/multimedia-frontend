import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();
const token = cookies.get('token');
export const api = new axios.create({
    baseURL: "http://localhost:3001",
    timeout: 10000,
    headers: {
        "Authorization": `Bearer ${token}`
    }
});