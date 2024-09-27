import { Icon } from "@phosphor-icons/react/dist/lib/types";
import Link from "next/link";
import classNames from "classnames";
interface ISideNavItemProps {
  icon: Icon;
  label: string;
  isActive?: boolean;
  href: string;
}
const SideNavItem = ({ icon, label, isActive, href }: ISideNavItemProps) => {
  const IconComponent = icon;
  return (
    <Link
      href={href}
      className={classNames(
        "flex gap-2.5 px-2.5 items-center h-10 rounded-br-8 border border-background-grey",
        {
          "bg-background-white border-gray-50 drop-shadow-sm": isActive,
        },
      )}
    >
      <IconComponent
        className={"h-5 w-5 text-gray-600"}
        weight={isActive ? "fill" : undefined}
      />
      <p className={"text-body-large font-medium text-gray-500"}>{label}</p>
    </Link>
  );
};
export default SideNavItem;
