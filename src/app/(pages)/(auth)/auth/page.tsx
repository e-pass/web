import "./auth.scss";

import Link from "next/link";

import { Button, Header, Input } from "@/components";

const AuthPage = () => {
    return (
        <section className="auth">
            <Header showCross showLogo>
                <h1 className="primary-title">Вход в систему</h1>
                <p className="primary-subtitle">
                    Нет аккаунта?{" "}
                    <Link href="/registration" className="primary-link">
                        Зарегистрироваться
                    </Link>
                </p>
            </Header>

            <div className="auth__container">
                <Input type="tel" placeholder="Номер телефона" />
                <Button title="Войти" />
            </div>
        </section>
    );
};

export default AuthPage;
