import "./button.scss";

interface ButtonProps {
    title: string;
    disabled?: boolean;
}

const Button = ({ title, disabled }: ButtonProps) => {
    return (
        <button className="qwer" disabled={disabled} type="submit">
            {title}
        </button>
    );
};

export default Button;
