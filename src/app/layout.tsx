import "./styles/helpers.scss";

import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import { ReactNode } from "react";

const nunitoSans = Nunito_Sans({
    weight: ["400", "600", "700"],
    subsets: ["cyrillic", "latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "E-Pass",
    description: "E-Pass web app",
};

const RootLayout = ({
    children,
}: Readonly<{
    children: ReactNode;
}>) => {
    return (
        <html lang="en">
            <body className={nunitoSans.className}>
                <main>{children}</main>
            </body>
        </html>
    );
};

export default RootLayout;
