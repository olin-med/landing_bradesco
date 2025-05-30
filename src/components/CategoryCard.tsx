import React from "react";

type CategoryCardProps = {
  id?: string;
  className?: string;
  title: string;
  imageUrl: string;
  children?: React.ReactNode;
  mobileScrollTargetId: string;
  desktopScrollTargetId: string;
};

const CategoryCard: React.FC<CategoryCardProps> = ({
  id,
  className = "",
  title,
  imageUrl,
  children,
  mobileScrollTargetId,
  desktopScrollTargetId,
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
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-auto object-cover"
      />

      <div className="p-4 flex-1 flex flex-col justify-between">
        <h2 className="text-xl text-[#cc1e24] font-bold mb-2">{title}</h2>
        <div className="text-gray-700 space-y-1">{children}</div>
      </div>

      <button
        type="button"
        onClick={scrollToSection}
        className="
          group flex items-center justify-center
          cursor-pointer w-[90%] mx-auto
          py-3 mt-2 mb-6
          hover:scale-[1.01] transition duration-300
          bg-[#cf1c32] hover:bg-red-600
          text-white font-medium rounded-md
          focus:outline-none focus:ring-2 focus:ring-blue-500
        "
      >
        <span className="flex items-center transition-transform duration-300 group-hover:-translate-x-1">
          <span className="transition-all duration-300">
            SAIBA MAIS
          </span>
          <span
            className="
              ml-2 inline-block
              transform scale-x-0
              -translate-y-[1px]
              group-hover:scale-x-100
              transition-all duration-300
              origin-left
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 inline-block stroke-current"
              fill="none"
              strokeWidth="3"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14M13 6l6 6-6 6"
              />
            </svg>
          </span>
        </span>
      </button>
    </div>
  );
};

export default CategoryCard;
