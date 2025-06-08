import '../../index.css'
import {Label} from "@components/ui/label.jsx";
import {Input} from "@components/ui/input.jsx";
import {Button} from "@components/ui/button.jsx";
import AuthLayout from "@components/layouts/auth_layout.jsx";


function Login() {
    return (
        <AuthLayout title={"Login"} description={"hello world a simple text"}>
            <form>
                <div className="py-2">
                    <Label>email</Label>
                    <Input placeholder="example@examnple.com"/>
                </div>
                <div className="py-2">
                    <Label>password</Label>
                    <Input placeholder="********"/>
                </div>
                <div className="pb-2">
                    <a href="/" className="underline">forgot your password ?</a>
                </div>
                <Button className="mt-2">Continue</Button>
            </form>
        </AuthLayout>
    )
}

export default Login;