"use client";

import "./registration.scss";

import Link from "next/link";

import { Button, Header, Input } from "@/components";

const RegistrationPage = () => {
    const placeholders = ["Имя", "Фамилия", "Номер телефона"];

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
                {placeholders.map((placeholder, i) => (
                    <Input key={i} placeholder={placeholder} />
                ))}
            </div>

            <Button title="Зарегистрироваться" />
        </section>
    );
};

export default RegistrationPage;
