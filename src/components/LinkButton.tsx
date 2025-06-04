import React from "react";

type ButtonProps = {
    id?: string;
    className?: string;
    type?: "button" | "submit" | "reset";
    link?: string;
    children: React.ReactNode;
};
const Button: React.FC<ButtonProps> = ({
    id,
    className = "",
    type = "button",
    link,
    children,
    
}) => {

    const handleClick = () => {
        window.open(
        link,
        '_blank',
        'noopener,noreferrer'
        );
    };

    return (
        <button
            id={id}
            type={type}
            className={`cursor-pointer font-bold border transition duration-300 hover:scale-[1.01] py-4 px-6 rounded ${className}`}
            onClick={handleClick}
        >
            {children}
        </button>
    );
}
export default Button;