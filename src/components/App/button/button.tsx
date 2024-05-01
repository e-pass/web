import "./button.scss";

interface IButtonProps {
    title: string;
    disabled?: boolean;
}

export const Button = ({ title, disabled }: IButtonProps) => {
    return (
        <button className="qwer" disabled={disabled} type="submit">
            {title}
        </button>
    );
};
