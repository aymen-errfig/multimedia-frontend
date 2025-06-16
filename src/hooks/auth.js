import {useState} from "react";
import {AuthServices} from "@/src/services/auth.js";

export const useAuth = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

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

    }

    return {loading, error, data, login, register, logout};
}