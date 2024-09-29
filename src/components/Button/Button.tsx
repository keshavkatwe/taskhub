import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { CircleNotch } from "@phosphor-icons/react/dist/ssr";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}
const Button = ({
  children,
  isLoading,
  disabled,
  ...otherProps
}: PropsWithChildren<IButtonProps>) => {
  return (
    <button
      {...otherProps}
      className={
        "bg-gradient-to-r from-blue-500 to-blue-600 h-12 rounded-br-8 text-text-white text-body-large font-semibold drop-shadow-primary-button px-4 flex items-center gap-1 disabled:opacity-50"
      }
      disabled={disabled || isLoading}
    >
      {isLoading && <CircleNotch size={18} className={"animate-spin"} />}
      {children}
    </button>
  );
};
export default Button;
