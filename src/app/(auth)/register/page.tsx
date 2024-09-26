import { Button, Input, OnboardingContainer } from "@/components";
import { useMemo } from "react";
import Link from "next/link";

const RegisterPage = () => {
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
          <h4 className={"text-display3 font-semibold text-center"}>Sign Up</h4>
          <p className={"text-body-large text-gray-500 text-center"}>
            By signing up, I agree to the taskhub <a>Privacy Policy</a> and{" "}
            <a>Terms of Service</a>
          </p>
        </div>
        <hr className={"border-line-dotted2 border-dotted"} />
        <div className={"flex flex-col gap-4"}>
          <Input placeholder={"Email address"} />
          <Button>Sign Up with Email</Button>
        </div>
        <hr className={"border-line-dotted2 border-dotted"} />
        <div>
          <p className={"text-body-large text-text-gray2 text-center"}>
            Already have an account? <Link href={"/login"}>Login</Link>
          </p>
        </div>
      </div>
    </OnboardingContainer>
  );
};
export default RegisterPage;
