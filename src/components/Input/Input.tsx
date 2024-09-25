import { InputHTMLAttributes } from "react";

const Input = ({ ...otherProps }: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      className={
        "h-12 w-full border border-line-field rounded-br-8 px-3.5 focus:border-line-dotted1 outline-none"
      }
      {...otherProps}
    />
  );
};
export default Input;
