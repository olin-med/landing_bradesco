// src/components/CategoryCard.tsx
import React from "react";

type CategoryCardProps = {
  id?: string;
  className?: string;
  title: string;
  imageUrl: string;
  children?: React.ReactNode;
};

const CategoryCard: React.FC<CategoryCardProps> = ({
  id,
  className = "",
  title,
  imageUrl,
  children,
}) => {
  return (
    <div
      id={id}
      className={`
        bg-gray-50
        rounded
        shadow-md
        overflow-hidden
        flex flex-col
        ${className}
      `}
    >
      {/* FULL‑WIDTH IMAGE */}
      <img
        src={imageUrl}
        alt={title}
        className="
          w-full           /* ← fill the card’s width */
          h-auto           /* let height scale automatically */
          object-cover     /* crop if needed to fill container */
        "
      />

      {/* CONTENT AREA */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <h2 className="text-xl text-[#cc1e24] font-bold mb-2">{title}</h2>
        <div className="text-gray-700 space-y-1">
          {children}
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
