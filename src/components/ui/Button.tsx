import { FC, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={`px-4 py-2 bg-[#01F0D0] text-black rounded-[41px] hover:bg-grey-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
