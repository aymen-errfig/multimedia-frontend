import React from "react";

function RootLayout({children}) {
    return (
        <html>
        <body>
        {children}
        </body>
        </html>
    )
}

export {RootLayout};