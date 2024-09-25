import { Button, Input, OnboardingContainer } from "@/components";

const LoginPage = () => {
  return (
    <OnboardingContainer>
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
            Already have an account? <a>Login</a>
          </p>
        </div>
      </div>
    </OnboardingContainer>
  );
};
export default LoginPage;
