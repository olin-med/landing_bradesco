import React from "react";

type SectionProps = {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
};

const PageContainer: React.FC<SectionProps> = ({ id, className = "", style, children }) => {
  return (
    <section
      id={id}
      className={`flex w-full ${className}`}
      style={style}
    >
      {children}
    </section>
  );
};

export default PageContainer;
