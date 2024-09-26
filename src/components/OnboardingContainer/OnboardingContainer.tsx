import { PropsWithChildren, ReactElement } from "react";
interface IOnboardingContainerProps {
  footer?: ReactElement;
}
const OnboardingContainer = ({
  children,
  footer,
}: PropsWithChildren<IOnboardingContainerProps>) => {
  return (
    <div className={"mt-12 flex justify-center"}>
      <div className={"w-[495px] rounded-br-20 bg-gray-50 p-1"}>
        <div className={"bg-background-white rounded-br-16 p-6"}>
          {children}
        </div>
        {footer}
      </div>
    </div>
  );
};
export default OnboardingContainer;
