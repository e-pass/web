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

            <div className="registration__checkboxes">
                <div className="checkbox__container">
                    <input id="coach" className="checkbox" type="checkbox" />
                    <label htmlFor="coach">Я — тренер</label>
                </div>
                <div className="checkbox__container">
                    <input id="conversation" className="checkbox" type="checkbox" />
                    <label htmlFor="conversation">
                        Соглашаюсь с Политикой обработки персональных данных
                    </label>
                </div>
            </div>

            <Button disabled title="Зарегистрироваться" />
        </section>
    );
};

export default RegistrationPage;
