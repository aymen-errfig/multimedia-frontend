import {Label} from "@components/ui/label.jsx";
import {Input} from "@components/ui/input.jsx";
import {Button} from "@components/ui/button.jsx";
import AuthLayout from "@components/layouts/auth_layout.jsx";
import {useAuth} from "@/src/hooks/auth.js";
import {Loader2} from "lucide-react";
import {useState} from "react";
import {data} from "react-router-dom";


function Register() {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const {loading, error, register} = useAuth();

    const handleSignUp = async () => {
        register(username, password, email).then(
            () => {
                console.log(data)
            }
        ).catch(() => {
            console.log(error);
        })
    }
    return (
        <AuthLayout title={"Register"} description={"hello world a simple text"}>
            <form>
                <div className="py-2">
                    <Label>username</Label>
                    <Input onChange={(e) => {
                        setUsername(e.target.value)
                    }} value={username} placeholder="John Doe"/>
                </div>
                <div className="py-2">
                    <Label>email</Label>
                    <Input onChange={(e) => {
                        setEmail(e.target.value)
                    }} value={email} placeholder="example@examnple.com"/>
                </div>
                <div className="py-2">
                    <Label>password</Label>
                    <Input onChange={(e) => {
                        setPassword(e.target.value)
                    }} value={password} placeholder="********" type={"password"}/>
                </div>
                <Button onClick={handleSignUp} className="mt-4 w-full" type="reset">
                    <Loader2 className="animate-spin" size={16} style={{display: loading ? "block" : "none"}}/>
                    Continue</Button>
            </form>
        </AuthLayout>
    )
}

export default Register
