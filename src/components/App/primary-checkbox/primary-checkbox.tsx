"use client";

import "./primary-checkbox.scss";

import { useId } from "react";

interface IProps {
    isChecked: boolean;
    changeActive: () => void;
    text: string;
}

export const PrimaryCheckbox = ({ isChecked, changeActive, text }: IProps) => {
    const checkboxId = useId();

    return (
        <label htmlFor={checkboxId} className="primary-input">
            <input
                id={checkboxId}
                onChange={changeActive}
                type="checkbox"
                checked={isChecked}
            />
            <p>
                <span>{text}</span>
            </p>
        </label>
    );
};
