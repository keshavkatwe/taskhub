"use client";
import { SideNavItem } from "@/components";
import { useMemo } from "react";
import {
  Bell,
  ChartBarHorizontal,
  ChatDots,
  CheckCircle,
  House,
} from "@phosphor-icons/react/dist/ssr";
import { usePathname } from "next/navigation";

const NavLinks = () => {
  const pathname = usePathname();
  const sideLinks = useMemo(() => {
    return [
      {
        label: "Home",
        href: "/",
        icon: House,
      },
      {
        label: "Tasks",
        href: "/tasks",
        icon: CheckCircle,
      },
      {
        label: "Inbox",
        href: "/inbox",
        icon: Bell,
      },
      {
        label: "Message",
        href: "/message",
        icon: ChatDots,
      },
      {
        label: "Analytics",
        href: "/analytics",
        icon: ChartBarHorizontal,
      },
    ];
  }, []);
  return (
    <div className={"flex flex-col gap-0.5"}>
      {sideLinks.map((value) => (
        <SideNavItem
          key={value.href}
          href={value.href}
          icon={value.icon}
          label={value.label}
          isActive={pathname === value.href}
        />
      ))}
    </div>
  );
};
export default NavLinks;
