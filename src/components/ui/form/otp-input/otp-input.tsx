import OTPInput from "react-otp-input";

export type OtpInputProps = {
  /** Value of the OTP input */
  value?: string;
  /** Number of OTP inputs to be rendered */
  numInputs?: number;
  /** Callback to be called when the OTP value changes */
  onChange: (otp: string) => void;
};

export const OtpInput = ({ value, numInputs = 4, onChange }: OtpInputProps) => {
  return (
    <OTPInput
      value={value}
      onChange={onChange}
      numInputs={numInputs}
      renderInput={({ className, ...props }) => (
        <input
          className={`${className} size-16 rounded-lg border border-primary text-center text-2xl font-bold`}
          {...props}
        />
      )}
      containerStyle={"flex gap-4"}
      skipDefaultStyles={true}
    />
  );
};
