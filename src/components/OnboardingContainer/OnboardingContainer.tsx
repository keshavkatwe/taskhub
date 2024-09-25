import { PropsWithChildren } from "react";
const OnboardingContainer = ({ children }: PropsWithChildren) => {
  return (
    <div className={"mt-12"}>
      <div className={"w-8/12 rounded-br-20"}>{children}</div>
    </div>
  );
};
export default OnboardingContainer;
