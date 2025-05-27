// src/components/WhatsAppButton.tsx
import React from "react";
import { FaWhatsapp } from "react-icons/fa";


type WhatsAppButtonProps = {
/** The text to prefill in WhatsApp chat */
message: string;
};

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ message }) => {
// Hard‑coded WhatsApp number (no "+" or dashes)
const phone = "5511984990470";
const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

const handleClick = () => {
    window.open(href, "_blank", "noopener,noreferrer");
};

return (
    
        <button
        type="button"
        className="bg-green-500 hover:bg-green-600 cursor-pointer transition duration-500  text-white font-semibold py-2 px-4 rounded"
        onClick={handleClick}
        >   
            <div className="flex flex-row justify-center items-center">
                WhatsApp
                <FaWhatsapp className="inline-block ml-1 text-xl" />
            </div>
        </button>
    
    
);
};

export default WhatsAppButton;
