import { PropsWithChildren } from "react";
import Image from "next/image";
import Logo from "@/assets/logo.svg";

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className={"px-12"}>
      <div className={"h-14 mt-4 flex flex-row items-center justify-between"}>
        <Image src={Logo} alt={""} />
        <a
          className={
            "h-10 p-4 text-body-large font-semibold flex flex-col justify-center"
          }
        >
          Login
        </a>
      </div>
      {children}
    </div>
  );
};
export default AuthLayout;
