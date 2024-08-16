import { useParams } from "react-router-dom";
import { ResetPasswordForm } from "src/features/auth/components/reset-password-form";

export const ResetPasswordRoute = () => {
  const { token } = useParams();

  if (!token) {
    return;
  }

  return (
    <>
      <ResetPasswordForm token={token} />
    </>
  );
};
