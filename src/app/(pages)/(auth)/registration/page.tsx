/* eslint-disable react/jsx-props-no-spreading */

"use client";

import "./registration.scss";

import Link from "next/link";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { Button, Header, Input, PrimaryCheckbox } from "@/components";
import { IShippingFields } from "@/components/App/primary-input/primary-input";

const RegistrationPage = () => {
    const [isTrainer, setIsTrainer] = useState<boolean>(false);
    const [isAcceptPolicy, setIsAcceptPolicy] = useState<boolean>(false);
    const { register, handleSubmit } = useForm<IShippingFields>();

    const onSubmit: SubmitHandler<IShippingFields> = (data) => {
        console.log(data);
    };

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

            <form onSubmit={handleSubmit(onSubmit)} className="registration__inputs">
                <Input
                    {...register("name", {
                        required: "error message",
                    })}
                    type="text"
                    placeholder="Имя"
                />
                <Input
                    {...register("secondName", {
                        required: "error message",
                    })}
                    type="text"
                    placeholder="Фамилия"
                />
                <Input
                    {...register("phoneNumber", {
                        required: "error message",
                    })}
                    type="tel"
                    placeholder="Номер телефона"
                />

                <PrimaryCheckbox
                    text="Я — тренер"
                    isChecked={isTrainer}
                    changeActive={() => setIsTrainer((prevState) => !prevState)}
                />
                <PrimaryCheckbox
                    text="Соглашаюсь с Политикой обработки персональных данных"
                    isChecked={isAcceptPolicy}
                    changeActive={() => setIsAcceptPolicy((prevState) => !prevState)}
                />

                <Button disabled={false} title="Зарегистрироваться" />
            </form>
        </section>
    );
};

export default RegistrationPage;
