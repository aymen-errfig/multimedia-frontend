import { useAuth } from "../../src/hooks/auth";
import { Loader2, LogOut, User } from 'lucide-react'
import { useEffect } from "react";

import { Button } from "../ui/button";
function Header() {
    const { get_user, loading, user, logout } = useAuth();
    useEffect(() => {
        get_user().then(() => {
        }).catch(() => {
            location.href = "/login";
        })
    }, [])
    return (
        <header className="w-full bg-primary text-white p-5 px-[10%] flex justify-between items-center">
            <h2 className="font-bold">MULTIMEDIA</h2>
            {loading ? <Loader2 className="animate-spin text-white" /> :
                <div className="flex gap-1 items-center">
                    <div className="bg-white/50 text-primary h-[50px] w-[50px] rounded-full flex justify-center items-center">
                        <User />
                    </div>
                    <div className="hidden flex-col md:flex">
                        <h1>{user?.email}</h1>
                        <p className="text-sm">{user?.nom}</p>
                    </div>
                    <Button variant={"destructive"} onClick={logout}><LogOut/> Logout</Button>
                </div>}
        </header>
    )
}

export { Header }