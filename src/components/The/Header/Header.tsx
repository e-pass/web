"use client";

import "./Header.scss";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface IHeaderProps {
    showLogo?: boolean;
    showCross?: boolean;
    showBack?: boolean;
    showImage?: boolean;
    children?: ReactNode;
}

export const Header = ({
    showLogo,
    showImage,
    showCross,
    showBack,
    children,
}: IHeaderProps) => {
    const router = useRouter();

    return (
        <header className="header">
            <nav className="header__nav">
                <div className="header__nav-left">
                    {showBack && (
                        <button
                            className="header__button"
                            type="button"
                            onClick={() => router.back()}>
                            <Image
                                width={32}
                                height={32}
                                src="/icons/arrow-left.svg"
                                alt="Back button"
                            />
                        </button>
                    )}
                </div>
                <div className="header__nav-center" />
                <div className="header__nav-right">
                    {!showImage && showCross && (
                        <button className="header__button" type="button">
                            <Image
                                width={32}
                                height={32}
                                src="/icons/cross.svg"
                                alt="Close button"
                            />
                        </button>
                    )}
                </div>
            </nav>
            {showLogo && (
                <div className="header__logo">
                    <Image width={200} height={43} src="/logo-big.svg" alt="Logo" />
                </div>
            )}
            <div className="header__slot">{children}</div>
        </header>
    );
};
