import "./input.scss";

import React from "react";

interface IInputProps {
    placeholder: string;
}

export const Input = ({ placeholder }: IInputProps) => {
    const [text, setText] = React.useState("");
    const [focused, setFocused] = React.useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
                type="text"
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
