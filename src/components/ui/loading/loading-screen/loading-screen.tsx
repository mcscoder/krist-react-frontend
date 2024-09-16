import { Spinner } from "src/components/ui/loading/spinner";

export const LoadingScreen = () => {
  return (
    <div className="w-full">
      <Spinner className="mx-auto size-20" />
    </div>
  );
};
