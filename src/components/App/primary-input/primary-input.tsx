"use client";

import "./primary-input.scss";

import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";

export interface IShippingFields {
    name: string;
    secondName: string;
    phoneNumber: string;
}

interface IInputProps {
    placeholder: string;
    type: string;
    name: "name" | "secondName" | "phoneNumber";
}

export const Input = ({ placeholder, type, name }: IInputProps) => {
    const [text, setText] = useState<string>("");
    const [focused, setFocused] = useState<boolean>(false);
    const { register } = useForm<IShippingFields>();

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    const handleFocus = () => {
        setFocused(true);
    };

    const handleBlur = () => {
        if (text === "") {
            setFocused(false);
        }
    };

    return (
        <div className="input-container">
            <input
                type={type}
                id="input"
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...register(name)}
                className="input"
                value={text}
                onChange={handleInputChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />

            <label
                htmlFor="input"
                className={
                    focused || text ? "placeholder placeholder_active" : "placeholder"
                }>
                {placeholder}
            </label>
        </div>
    );
};
