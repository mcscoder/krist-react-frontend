import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useToast } from "src/components/ui/toast";
import { api } from "src/lib/api-client";
import { ResponseMessage } from "src/types";
import { z } from "zod";

export const subscribeInputSchema = z.object({
  email: z.string().min(1, "Required").email("Invalid email"),
});

const postSubscribeData = (data: z.infer<typeof subscribeInputSchema>) => {
  // Temp code, replace before deploy production
  return api.post("/subscribe/endpoint....", data);
};

export const useSubscribe = () => {
  const { addToast } = useToast();

  return useMutation({
    mutationFn: postSubscribeData,
    onSuccess: () => {
      addToast({
        title: "Subscribed",
        message: "Email subscribed success",
        type: "success",
      });
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
