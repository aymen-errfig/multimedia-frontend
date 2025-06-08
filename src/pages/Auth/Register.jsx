import {Label} from "@components/ui/label.jsx";
import {Input} from "@components/ui/input.jsx";
import {Button} from "@components/ui/button.jsx";
import AuthLayout from "@components/layouts/auth_layout.jsx";


function Register() {
    return (
        <AuthLayout title={"Register"} description={"hello world a simple text"}>
            <form>
                <div className="py-2">
                    <Label>username</Label>
                    <Input placeholder="John Doe"/>
                </div>
                <div className="py-2">
                    <Label>email</Label>
                    <Input placeholder="example@examnple.com"/>
                </div>
                <div className="py-2">
                    <Label>password</Label>
                    <Input placeholder="********"/>
                </div>
                <Button className="mt-4 w-full">Continue</Button>
            </form>
        </AuthLayout>
    )
}

export default Register
