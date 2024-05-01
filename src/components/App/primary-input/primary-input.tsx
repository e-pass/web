import "./primary-input.scss";

import { ChangeEvent, useState } from "react";

interface IInputProps {
    placeholder: string;
    type: string;
}

export const Input = ({ placeholder, type }: IInputProps) => {
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
                type={type}
                id="input"
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
