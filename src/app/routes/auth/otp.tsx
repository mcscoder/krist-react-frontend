import { Navigate, useParams } from "react-router-dom";
import { OtpForm } from "src/features/auth/components/otp-form";

export const OtpRoute = () => {
  const { email } = useParams();

  if (!email) {
    return <Navigate to={"/"} />;
  }

  return <OtpForm email={email} />;
};
