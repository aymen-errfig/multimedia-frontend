import {RootLayout} from "@components/layouts/layout.jsx";
import {Header} from "@components/homepage/header.jsx";

function HomeLayout({children}) {
    return (
        <RootLayout>
            <Header/>
            {children}
        </RootLayout>
    );
}

export {HomeLayout}