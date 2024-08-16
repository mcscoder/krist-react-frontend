import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { useToast } from "src/components/ui/toast";
import { api } from "src/lib/api-client";
import { ResponseMessage, Token } from "src/types";
import { z } from "zod";

export const otpInputSchema = z.object({
  otp: z.string().min(5, "Required"),
});

type PostOtpData = {
  email: string;
  otp: string;
};

const postOtpData = ({ email, otp }: PostOtpData) => {
  return api.post(`/auth/otp/${email}/${otp}`);
};

export const useOtp = () => {
  const navigate = useNavigate();
  const { addToast } = useToast();

  return useMutation({
    mutationFn: postOtpData,
    onSuccess: (response) => {
      const data = response.data as Token;

      navigate(`/auth/reset-password/${data.token}`);
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
