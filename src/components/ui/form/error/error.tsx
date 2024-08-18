export type ErrorProps = {
  errorMessage?: string;
};

export const Error = ({ errorMessage }: ErrorProps) => {
  if (!errorMessage) {
    return <></>;
  }

  return (
    <div
      role="alert"
      aria-label={errorMessage}
    >
      <span className="text-sm font-semibold text-red-500">{errorMessage}</span>
    </div>
  );
};
