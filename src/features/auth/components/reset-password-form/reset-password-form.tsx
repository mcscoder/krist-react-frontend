import { useNavigate } from "react-router-dom";
import { LocalIcon } from "src/assets/icons";
import { Button } from "src/components/ui/button";
import { Input } from "src/components/ui/form";
import { AlertOverlay } from "src/components/ui/overlay/components";
import {
  resetPasswordInputSchema,
  useResetPassword,
} from "src/features/auth/api/reset-password";
import { AuthForm } from "src/features/auth/components/auth-form";

type ResetPasswordFormProps = {
  token: string;
};

const Alert = () => {
  const navigate = useNavigate();

  return (
    <AlertOverlay
      title="Password Changed Successfully"
      description="Your password has been updated successfully"
      icon={
        <LocalIcon
          iconName="Successful"
          height={"auto"}
          width={"auto"}
        />
      }
      primaryOption={{
        text: "Back to login",
        onClick: () => {
          navigate("/auth");
        },
      }}
    />
  );
};

export const ResetPasswordForm = ({ token }: ResetPasswordFormProps) => {
  const resetPassword = useResetPassword(<Alert />);

  return (
    <AuthForm
      h1="New password"
      h2="Set your new password below"
      onSubmit={(data) => {
        resetPassword.mutate({ token, password: data.password });
      }}
      schema={resetPasswordInputSchema}
    >
      {({ register, formState }) => (
        <>
          <Input
            label="New Password"
            type="password"
            register={register("password")}
            error={formState.errors.password}
          />
          <Button
            size={"lg"}
            className="mt-4"
            type="submit"
          >
            Reset Password
          </Button>
        </>
      )}
    </AuthForm>
  );
};
