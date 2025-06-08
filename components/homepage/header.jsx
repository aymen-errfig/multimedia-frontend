import {Button} from "@components/ui/button.jsx";
import {Link} from "react-router-dom";

function Header() {
    return (
        <header className="w-full bg-primary text-white p-5 px-[10%] flex justify-between items-center">
            <h2 className="font-bold">MULTIMEDIA</h2>
            <div>
                <Link to="/login">
                    <Button className="bg-white text-primary">Login</Button>
                </Link>
                <Link to="/register">
                    <Button variant="outlined">Register</Button>
                </Link>
            </div>
        </header>
    )
}

export {Header}