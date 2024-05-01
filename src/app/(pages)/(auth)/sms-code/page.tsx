"use client";

import "./sms-code.scss";

import clsx from "clsx";
import { ChangeEvent, useEffect, useMemo, useRef, useState } from "react";

import { Header } from "@/components";

interface ISmsCodeProps {
    params: {
        phoneNumber: string;
    };
}

interface IDigit {
    value: string;
    isActive: boolean;
}

const Digit = ({ value, isActive }: IDigit) => {
    return (
        <div
            className={clsx(
                "sms-code__digits-item",
                isActive && "sms-code__digits-item_active"
            )}>
            <span>{value}</span>
            <div />
        </div>
    );
};

// const TIMER_SECONDS = 60;

const SmsCodePage = ({ params }: ISmsCodeProps) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [value, setValue] = useState<string>("");

    const { phoneNumber } = params;

    const digits = useMemo(() => {
        const items: IDigit[] = [];

        value
            .padEnd(4, " ")
            .split("")
            .forEach((item, index) => {
                items.push({
                    value: item,
                    isActive: value.length === index,
                });
            });

        return items;
    }, [value]);

    const handleChangeValue = (ev: ChangeEvent<HTMLInputElement>) => {
        ev.preventDefault();
        if (ev.target.value.length <= 4) setValue(ev.target.value);
    };

    useEffect(() => {
        if (inputRef.current) inputRef.current.focus();
    }, []);

    return (
        <>
            <Header showCross showLogo>
                <h1 className="primary-title">Подтвердите номер телефона</h1>
                <p className="primary-subtitle">
                    Мы&nbsp;отправили код на&nbsp;номер {phoneNumber}.
                </p>
            </Header>

            <label htmlFor="inputDigits" className="sms-code__digits">
                <input
                    id="inputDigits"
                    type="number"
                    ref={inputRef}
                    value={value}
                    onChange={handleChangeValue}
                    className="sms-code__digits-input"
                />
                {digits.map((item, index) => {
                    return (
                        <Digit key={index} value={item.value} isActive={item.isActive} />
                    );
                })}
            </label>
        </>
    );
};

export default SmsCodePage;
