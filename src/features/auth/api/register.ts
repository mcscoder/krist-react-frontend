import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import React from "react";
import { useOverlay } from "src/components/ui/overlay";
import { useToast } from "src/components/ui/toast";
import { api } from "src/lib/api-client";
import { ResponseMessage } from "src/types";
import { z } from "zod";

export const registerInputSchema = z.object({
  firstName: z.string().min(1, "Required"),
  lastName: z.string().min(1, "Required"),
  email: z.string().min(1, "Required").email("Invalid email"),
  password: z.string().min(6, "Required"),
});

const postRegisterData = (data: z.infer<typeof registerInputSchema>) => {
  return api.post("/auth/register", data);
};

export const useRegister = (alert: React.ReactNode) => {
  const { display } = useOverlay();
  const { addToast } = useToast();

  return useMutation({
    mutationFn: postRegisterData,
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
