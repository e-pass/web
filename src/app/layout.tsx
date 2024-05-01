import "@/styles/helpers.scss";

import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
    title: "E-Pass",
    description: "E-Pass web app",
    icons: {
        icon: "/favicon.svg",
    },
};

const RootLayout = ({
    children,
}: Readonly<{
    children: ReactNode;
}>) => {
    return (
        <html lang="en">
            <body>
                <main>{children}</main>
            </body>
        </html>
    );
};

export default RootLayout;
