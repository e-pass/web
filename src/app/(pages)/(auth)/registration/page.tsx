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
    const { handleSubmit } = useForm<IShippingFields>();

    const onSubmit: SubmitHandler<IShippingFields> = (data) => {
        console.log(data);
    };
    /*  -------------- Тут опции для инпутов ----------------  */

    // const nameRegister = {
    //     ...register("name", {
    //         required: "error text",
    //         minLength: {
    //             value: 4,
    //             message: "error message",
    //         },
    //     }),
    // };

    // const emailRegister = {
    //     ...register("email", {
    //         required: "error text",
    //         minLength: {
    //             value: 8,
    //             message: "error message",
    //         },
    //     }),
    // };

    // const phoneNumberRegister = {
    //     ...register("email", {
    //         required: "error text",
    //         minLength: {
    //             value: 11,
    //             message: "error message",
    //         },
    //     }),
    // };

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
                <input name="test" type="text" placeholder="test" />
                <Input name="name" type="text" placeholder="Имя" />
                <Input name="secondName" type="text" placeholder="Фамилия" />
                <Input name="phoneNumber" type="tel" placeholder="Номер телефона" />
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
