import { useMutation } from "@tanstack/react-query";
import { api } from "src/lib/api-client";

const postLogout = async () => {
  return (await api.post("/auth/logout")).data;
};

export const useLogout = () => {
  return useMutation({
    mutationFn: postLogout,
    onSuccess: () => {
      window.location.reload();
    },
  });
};
