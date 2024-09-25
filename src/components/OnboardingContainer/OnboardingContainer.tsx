import { PropsWithChildren } from "react";
const OnboardingContainer = ({ children }: PropsWithChildren) => {
  return (
    <div className={"mt-12 flex justify-center"}>
      <div className={"w-8/12 rounded-br-20 bg-gray-50 p-1"}>
        <div className={"bg-background-white rounded-br-16 p-6"}>
          {children}
        </div>
      </div>
    </div>
  );
};
export default OnboardingContainer;
