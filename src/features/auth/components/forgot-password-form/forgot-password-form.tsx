import { Button } from "src/components/ui/button";
import { Input } from "src/components/ui/form";
import {
  forgotPasswordInputSchema,
  useForgotPassword,
} from "src/features/auth/api/forgot-password";
import { AuthForm } from "src/features/auth/components/auth-form";

export const ForgotPasswordForm = () => {
  const forgotPassword = useForgotPassword();

  return (
    <AuthForm
      h1="Forgot Password"
      h2="Enter your registered email address, we'll send you a code to reset your password."
      schema={forgotPasswordInputSchema}
      onSubmit={(data) => {
        forgotPassword.mutate(data.email);
      }}
    >
      {({ register, formState }) => (
        <>
          <Input
            label="Email address"
            register={register("email")}
            error={formState.errors.email}
          />
          <Button
            size={"lg"}
            className="mt-4"
            type="submit"
          >
            Send OTP
          </Button>
        </>
      )}
    </AuthForm>
  );
};
