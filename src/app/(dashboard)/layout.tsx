import { PropsWithChildren } from "react";
import Image from "next/image";
import Logo from "@/assets/logo.svg";
import { Line } from "@/components";
import { CaretUpDown } from "@phosphor-icons/react/dist/ssr";
import { PlusCircle } from "@phosphor-icons/react/dist/ssr";
import NavLinks from "@/app/(dashboard)/NavLinks";

const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className={"flex h-screen"}>
      <div className={"w-72 p-4 pr-2"}>
        <div className={"flex flex-col gap-4"}>
          <Image src={Logo} alt={""} />
          <Line />
          <div
            className={
              "flex bg-gray-100 h-11 rounded-br-8 items-center px-1.5 justify-between"
            }
          >
            <p className={"text-body-large font-medium text-gray-800"}>
              Fourtwo Studio
            </p>
            <CaretUpDown className="w-5 h-5 text-gray-500" />
          </div>
          <Line />
          <NavLinks />
          <Line />
          <div className={"flex items-center justify-between"}>
            <p className={"text-body-small font-medium text-gray-500"}>
              PROJECTS
            </p>
            <PlusCircle className={"h-5 w-5 text-gray-500"} weight={"fill"} />
          </div>
        </div>
      </div>
      <div className={"flex-grow p-2"}>
        <div
          className={
            "rounded-br-16 bg-background-white h-full border border-gray-50 p-6 flex flex-col gap-8"
          }
        >
          <div>
            <div className={"flex flex-col gap-1.5"}>
              <p className={"text-display5 font-semibold"}>My Tasks</p>
              <p className={"text-body-large text-gray-500"}>
                Monitor all of your tasks here
              </p>
            </div>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};
export default DashboardLayout;
