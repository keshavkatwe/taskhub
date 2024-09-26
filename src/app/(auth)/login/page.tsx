import { Button, Input, Line, OnboardingContainer } from "@/components";
import { useMemo } from "react";
import Link from "next/link";

const LoginPage = () => {
  const footer = useMemo(() => {
    return (
      <div className={"pt-4 pb-5"}>
        <p className={"text-body-large text-text-gray1 text-center"}>
          Question? Need a hand? <a>Support Can Help</a>
        </p>
      </div>
    );
  }, []);

  return (
    <OnboardingContainer footer={footer}>
      <div className={"flex flex-col gap-7"}>
        <div className={"flex flex-col gap-4"}>
          <h4 className={"text-display3 font-semibold text-center"}>
            Welcome back!
          </h4>
        </div>
        <Line />
        <div className={"flex flex-col gap-4"}>
          <Input placeholder={"Enter email address"} />
          <Input placeholder={"Enter password"} />
          <a className={"text-body-large font-semibold text-center"}>
            Forgot Password?
          </a>
          <Button>Login</Button>
        </div>
        <Line />
        <div>
          <p className={"text-body-large text-text-gray2 text-center"}>
            Don’t have an account? <Link href={"/register"}>Sign Up</Link>
          </p>
        </div>
      </div>
    </OnboardingContainer>
  );
};
export default LoginPage;
