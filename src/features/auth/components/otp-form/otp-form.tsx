import { useState } from "react";
import { Button } from "src/components/ui/button";
import { OtpInput } from "src/components/ui/form/otp-input";
import { otpInputSchema, useOtp } from "src/features/auth/api/otp";
import { AuthForm } from "src/features/auth/components/auth-form";

export type OtpFormProps = {
  email: string;
};

export const OtpForm = ({ email }: OtpFormProps) => {
  const [otp, setOtp] = useState("");
  const otpApi = useOtp();

  return (
    <AuthForm
      h1="Enter OTP"
      h2={`We have share a code of your registered email address ${email}`}
      schema={otpInputSchema}
      onSubmit={(data) => {
        otpApi.mutate({ email, otp: data.otp });
      }}
    >
      {({ setValue }) => (
        <>
          <OtpInput
            value={otp}
            onChange={(e) => {
              const value = e.valueOf();
              setOtp(value);
              setValue("otp", value);
            }}
            numInputs={5}
          />
          <Button
            size={"lg"}
            className="mt-4"
            type="submit"
            disabled={otp.length != 5}
          >
            Verify
          </Button>
        </>
      )}
    </AuthForm>
  );
};
