import React from "react";

type ButtonProps = {
    mobileScrollTargetId: string;
    desktopScrollTargetId: string;
    className?: string;
    link?: string;
    children: React.ReactNode;
};
const Button: React.FC<ButtonProps> = ({
    mobileScrollTargetId,
    desktopScrollTargetId,
    children,
    className
    
    
}) => {

    const scrollToSection = () => {
        // Tailwind's `lg:` breakpoint is 1024px
        const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
        const targetId = isDesktop
        ? desktopScrollTargetId
        : mobileScrollTargetId;

        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <button
            className={`cursor-pointer font-bold border transition duration-300 hover:scale-[1.01] py-4 px-6 rounded ${className}`}
            onClick={scrollToSection}
        >
            {children}
        </button>
    );
}
export default Button;