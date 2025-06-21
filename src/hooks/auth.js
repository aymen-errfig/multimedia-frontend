import {useState} from "react";
import {AuthServices} from "@/src/services/auth.js";
import Cookies from "universal-cookie";
import { toast } from "react-toastify";

export const useAuth = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    const [user, setUser] = useState(null);

    const login = async (user, pass) => {
        try {
            setLoading(true);
            const resp = await AuthServices.login(user, pass);
            setData(resp.data);
        } catch (e) {
            setError(e);
        } finally {
            setLoading(false);
        }
    }

    const register = async (user, pass, email) => {
        try {
            setLoading(true);
            const resp = await AuthServices.register(user, pass, email);
            setData(resp.data);
        } catch (e) {
            setError(e);
        } finally {
            setLoading(false);
        }
    }

    const logout = () => {
        const cookies = new Cookies();
        cookies.remove('token', {path: '/'});
        location.href = "/login";
    }

    const get_user = async () => {
        try {
            setLoading(true);
            const resp =await AuthServices.getUser();
            setUser(resp.data.user_infos);
        } catch (e) {
            setError(e);
            toast.error("Failed to fetch user data: " + e.message);
            if (e.response && e.response.status === 401) {
                // If unauthorized, redirect to login
                location.href = "/login";
            }
        } finally {
            setLoading(false);
        }
    }

    return {loading, error, data, login, register, logout, get_user, user};
}