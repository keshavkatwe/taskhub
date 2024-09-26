import { PropsWithChildren } from "react";
import Image from "next/image";
import Logo from "@/assets/logo.svg";
import { Line, SideNavItem } from "@/components";
import {
  CaretUpDown,
  House,
  CheckCircle,
  Bell,
  ChatDots,
  ChartBarHorizontal,
} from "@phosphor-icons/react/dist/ssr";

const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className={"flex h-screen"}>
      <div className={"w-72 p-4"}>
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
          <div className={"flex flex-col gap-0.5"}>
            <SideNavItem icon={House} label={"Home"} isActive />
            <SideNavItem icon={CheckCircle} label={"My Tasks"} />
            <SideNavItem icon={Bell} label={"Inbox"} />
            <SideNavItem icon={ChatDots} label={"Message"} />
            <SideNavItem icon={ChartBarHorizontal} label={"Analytics"} />
          </div>
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
