import React from "react";

function RootLayout({children}) {
    return (
        <div className="root w-full h-full flex flex-col">
            {children}
        </div>
    )
}

export {RootLayout};