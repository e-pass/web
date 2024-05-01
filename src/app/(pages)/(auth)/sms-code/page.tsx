"use client";

import "./sms-code.scss";

import clsx from "clsx";
import { useId, useMemo, useState } from "react";

import { Header } from "@/components";

interface ISmsCodeProps {
    params: {
        phoneNumber: string;
    };
}

// const TIMER_SECONDS = 60;

const SmsCodePage = ({ params }: ISmsCodeProps) => {
    const [value, setValue] = useState<string>("");

    const { phoneNumber } = params;

    const inputId = useId();

    const digits = useMemo(() => {
        return value.padEnd(4, " ").split("");
    }, [value]);

    return (
        <>
            <Header showCross showLogo>
                <h1 className="primary-title">Подтвердите номер телефона</h1>
                <p className="primary-subtitle">
                    Мы&nbsp;отправили код на&nbsp;номер {phoneNumber}.
                </p>
            </Header>

            <div className="sms-code__digits">
                <input
                    id={inputId}
                    className="sms-code__digits-input"
                    value={value}
                    onChange={(ev) => setValue(ev.target.value)}
                    type="number"
                />
                {digits.map((item, index) => {
                    const isActive = digits[index - 1] === " ";

                    return (
                        <div
                            key={index}
                            className={clsx(
                                "sms-code__digits-item",
                                isActive && "sms-code__digits-item_active"
                            )}>
                            <span>{item}</span>
                            <div />
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default SmsCodePage;
