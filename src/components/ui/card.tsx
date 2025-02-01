import { FC, ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card: FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`bg-white p-4 rounded-lg shadow ${className}`}>
      {children}
    </div>
  );
};

export const CardContent: FC<CardProps> = ({ children, className }) => {
  return <div className={`p-2 ${className}`}>{children}</div>;
};
