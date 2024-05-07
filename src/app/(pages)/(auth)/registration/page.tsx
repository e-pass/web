"use client";

import "./registration.scss";

import Link from "next/link";
import { useRef, useState } from "react";

import { Button, Header, Input, PrimaryCheckbox } from "@/components";

const RegistrationPage = () => {
    const [isTrainer, setIsTrainer] = useState<boolean>(false);
    const [isAcceptPolicy, setIsAcceptPolicy] = useState<boolean>(false);

    const formRef = useRef<HTMLFormElement>(null);

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

            <form ref={formRef} className="registration__inputs">
                <Input type="text" placeholder="Имя" />
                <Input type="text" placeholder="Фамилия" />
                <Input type="tel" placeholder="Номер телефона" />
                <PrimaryCheckbox
                    text="Я — тренер"
                    isChecked={isTrainer}
                    changeActive={() => setIsTrainer((prevState) => !prevState)}
                />
                <PrimaryCheckbox
                    text="Соглашаюсь с Политикой обработки персональных данных"
                    isChecked={isAcceptPolicy}
                    changeActive={() => setIsAcceptPolicy((prevState) => !prevState)}
                />
            </form>

            <Button disabled={false} title="Зарегистрироваться" />
        </section>
    );
};

export default RegistrationPage;
