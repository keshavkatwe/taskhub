import { ButtonHTMLAttributes, PropsWithChildren } from "react";

const Button = ({
  children,
  ...otherProps
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) => {
  return (
    <button
      {...otherProps}
      className={
        "bg-gradient-to-r from-blue-500 to-blue-600 h-12 rounded-br-8 text-text-white text-body-large font-semibold drop-shadow-primary-button px-4"
      }
    >
      {children}
    </button>
  );
};
export default Button;
