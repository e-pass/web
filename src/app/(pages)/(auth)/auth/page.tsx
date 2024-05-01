import "./auth.scss";

import Link from "next/link";

import { Header } from "@/components";

const AuthPage = () => {
    return (
        <Header showCross showLogo>
            <h1 className="primary-title">Вход в систему</h1>
            <p className="primary-subtitle">
                Нет аккаунта?{" "}
                <Link href="/registration" className="primary-link">
                    Зарегистрироваться
                </Link>
            </p>
        </Header>
    );
};

export default AuthPage;
