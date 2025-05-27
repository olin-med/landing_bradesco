// src/components/VerticalCard.tsx
import React, { useState } from "react";

type VerticalCardProps = {
  title: string;
  children: React.ReactNode;
};

const VerticalCard: React.FC<VerticalCardProps> = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white rounded overflow-hidden shadow-sm">
      {/* Header */}
      <button
        type="button"
        className="w-full text-left px-4 py-3 font-medium text-white bg-[#cf1c32] cursor-pointer focus:outline-none"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        {title}
      </button>

      {/* Animated Panel */}
      <div
        className={`
          overflow-hidden
          transition-all duration-300 ease-in-out
          ${open ? "max-h-96 opacity-100 p-4 border-t border-gray-200" : "max-h-0 opacity-0 p-0"}
        `}
      >
        {children}
      </div>
    </div>
  );
};

export default VerticalCard;
