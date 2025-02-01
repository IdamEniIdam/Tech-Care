import { FC, ReactNode } from "react";

interface ScrollAreaProps {
  children: ReactNode;
  className?: string;
}

export const ScrollArea: FC<ScrollAreaProps> = ({ children, className }) => {
  return (
    <div className={`overflow-auto max-h-64 ${className}`}>{children}</div>
  );
};
