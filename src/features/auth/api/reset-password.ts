import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useOverlay } from "src/components/ui/overlay";
import { useToast } from "src/components/ui/toast";
import { api } from "src/lib/api-client";
import { ResponseMessage } from "src/types";
import { z } from "zod";

export const resetPasswordInputSchema = z.object({
  password: z.string().min(6, "Required"),
});

const postResetPasswordData = ({
  token,
  password,
}: {
  token: string;
  password: string;
}) => {
  return api.post(`/auth/reset-password/${token}`, { password });
};

export const useResetPassword = (alert: React.ReactNode) => {
  const { display } = useOverlay();
  const { addToast } = useToast();

  return useMutation({
    mutationFn: postResetPasswordData,
    onSuccess: () => {
      display(alert);
    },
    onError: (error: AxiosError) => {
      const data = error.response?.data as ResponseMessage;

      addToast({
        title: "Something went wrong",
        message: data.message,
        type: "error",
      });
    },
  });
};
