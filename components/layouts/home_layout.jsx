import {RootLayout} from "@components/layouts/layout.jsx";
import {Header} from "@components/homepage/header.jsx";
import {ToastContainer} from "react-toastify";


function HomeLayout({children}) {
    return (
        <RootLayout>
            <Header/>
            {children}
            <ToastContainer position="bottom-right"/>
        </RootLayout>
    );
}

export {HomeLayout}