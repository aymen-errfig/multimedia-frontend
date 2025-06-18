import '../../index.css'
import {Label} from "@components/ui/label.jsx";
import {Input} from "@components/ui/input.jsx";
import {Button} from "@components/ui/button.jsx";
import AuthLayout from "@components/layouts/auth_layout.jsx";
import {useEffect, useState} from "react";
import {useAuth} from "@/src/hooks/auth.js";
import {Loader2} from "lucide-react";
import Cookies from "universal-cookie";


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {loading, error, data, login} = useAuth();
    const cookies = new Cookies();

    const handleLogin = async () => {
        login(email, password).then(
            () => {
                if (data?.token) {
                    cookies.set('token', data.token, {path: '/'});
                }
            }
        ).catch(() => {
            console.log(error);
        })
    }
    return (
        <AuthLayout title={"Login"} description={"hello world a simple text"}>
            <form>
                <div className="py-2">
                    <Label>email</Label>
                    <Input className={error ? "border-red-500" : ""} placeholder="example@examnple.com"
                           onChange={(e) => setEmail(e.target.value)} value={email}/>
                </div>
                <div className="py-2">
                    <Label>password</Label>
                    <Input className={error ? "border-red-500" : ""} placeholder="********"
                           onChange={(e) => setPassword(e.target.value)} value={password}
                           type="password"/>
                </div>
                <div className="pb-2">
                    <a href="/" className="underline">forgot your password ?</a>
                </div>

                <Button onClick={handleLogin} type={"reset"} className="mt-2 w-full">
                    <Loader2 className="animate-spin" size={16} style={{display: loading ? "block" : "none"}}/>
                    Continue</Button>
            </form>
        </AuthLayout>
    )
}

export default Login;