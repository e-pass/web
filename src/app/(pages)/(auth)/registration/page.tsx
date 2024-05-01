import "./registration.scss";

import Link from "next/link";

import { Button, Header } from "@/components";

const RegistrationPage = () => {
    return (
        <>
            <Header showCross showLogo>
                <h1 className="primary-title">Регистрация</h1>
                <p className="primary-subtitle">
                    Уже зарегистрированы?{" "}
                    <Link href="/auth" className="primary-link">
                        Войти
                    </Link>
                </p>
            </Header>

            <Button title="Зарегистрироваться" />
        </>
    );
};

export default RegistrationPage;
