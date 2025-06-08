import {RootLayout} from "@components/layouts/layout.jsx";
import {Link} from "react-router-dom";
import {ExternalLink, Link2} from "lucide-react";


function AuthLayout({children, title, description}) {
    return (
        <RootLayout>
            <main className="bg-black h-full w-full flex">
                <div className="h-full w-1/2">

                </div>
                <div className="h-full w-1/2 bg-white flex justify-center items-center relative">
                    {title === "Register" ? <Link to="/login"
                                                  className="absolute flex items-center gap-2 top-0 right-0 p-10 hover:text-primary">
                            Login
                            <ExternalLink size={16}/>
                        </Link>
                        :
                        <Link to="/register"
                              className="absolute flex items-center gap-2 top-0 right-0 p-10 hover:text-primary">
                            Register
                            <ExternalLink size={16}/>
                        </Link>}
                    <div className="w-[50%]">
                        <div className="pb-1">
                            <h2 className="text-4xl pb-1 font-semibold">{title}</h2>
                            <p className="text-muted-foreground text-sm">{description}</p>
                        </div>
                        {children}
                    </div>
                </div>
            </main>
        </RootLayout>
    )
}

export default AuthLayout
