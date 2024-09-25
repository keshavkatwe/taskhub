import { OnboardingContainer } from "@/components";

const LoginPage = () => {
  return (
    <OnboardingContainer>
      <div>
        <div className={"flex flex-col gap-4"}>
          <h4 className={"text-display3 font-semibold text-center"}>Sign Up</h4>
          <p className={"text-body-large text-gray-500 text-center"}>
            By signing up, I agree to the taskhub <a>Privacy Policy</a> and{" "}
            <a>Terms of Service</a>
          </p>
        </div>
      </div>
    </OnboardingContainer>
  );
};
export default LoginPage;
