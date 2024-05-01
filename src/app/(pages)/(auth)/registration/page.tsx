"use client";

import "./registration.scss";

import Link from "next/link";

import { Button, Header, Input } from "@/components";

const RegistrationPage = () => {
    return (
        <section className="registration">
            <Header showCross showLogo>
                <h1 className="primary-title">Регистрация</h1>
                <p className="primary-subtitle">
                    Уже зарегистрированы?{" "}
                    <Link href="/auth" className="primary-link">
                        Войти
                    </Link>
                </p>
            </Header>

            <div className="registration__inputs">
                <Input type="text" placeholder="Имя" />
                <Input type="text" placeholder="Фамилия" />
                <Input type="tel" placeholder="Номер телефона" />
            </div>

            <Button disabled title="Зарегистрироваться" />
        </section>
    );
};

export default RegistrationPage;
