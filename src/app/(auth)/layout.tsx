import { PropsWithChildren } from "react";
import Image from "next/image";
import Logo from "@/assets/logo.svg";

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className={"px-12"}>
      <div className={"bg-text-gray1 h-14 mt-4 flex flex-row items-center"}>
        <Image src={Logo} alt={""} />
      </div>
      {children}
    </div>
  );
};
export default AuthLayout;
