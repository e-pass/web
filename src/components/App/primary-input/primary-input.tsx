/* eslint-disable react/jsx-props-no-spreading */

"use client";

import "./primary-input.scss";

import { ChangeEvent, ForwardedRef, forwardRef, useState } from "react";

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

export const Input = forwardRef(
    (props: IInputProps, ref: ForwardedRef<HTMLInputElement>) => {
        const [text, setText] = useState<string>("");
        const [focused, setFocused] = useState<boolean>(false);

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
                    id="input"
                    className="input"
                    value={text}
                    onChange={handleInputChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    {...props}
                    ref={ref}
                />

                <label
                    htmlFor="input"
                    className={
                        focused || text ? "placeholder placeholder_active" : "placeholder"
                    }>
                    {props.placeholder}
                </label>
            </div>
        );
    }
);
