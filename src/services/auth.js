import {api} from "@/src/services/api.js";

export class AuthServices {
    static login = async (user, pass) => {
        return await api.post("/user/login", {
            email: user,
            password: pass,
        })
    }
    static register = async (username, password, email) => {
        return await api.post("/user/signup", {
            username: username,
            password: password,
            email: email,
        })
    }
    static getUser = async () => {
        return await api.get("/user/me");
    }
}