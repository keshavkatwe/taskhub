import { PropsWithChildren } from "react";
import Image from "next/image";
import Logo from "@/assets/logo.svg";
import { Line } from "@/components";

const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className={"flex h-screen"}>
      <div className={"w-72 p-4"}>
        <div className={"flex flex-col gap-4"}>
          <Image src={Logo} alt={""} />
          <Line />
        </div>
      </div>
      <div className={"flex-grow p-2"}>
        <div
          className={
            "rounded-br-16 bg-background-white h-full border border-gray-50"
          }
        >
          {children}
        </div>
      </div>
    </div>
  );
};
export default DashboardLayout;
