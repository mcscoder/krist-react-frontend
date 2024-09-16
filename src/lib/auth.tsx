import { useQuery } from "@tanstack/react-query";
import { Navigate, Outlet } from "react-router-dom";
import { LoadingScreen } from "src/components/ui/loading";
import { api } from "src/lib/api-client";
import { UserOverview } from "src/types";

const getUser = async () => {
  return (await api.get<UserOverview>("/users/profile")).data;
};

export const useUser = () => {
  return useQuery({
    queryKey: ["userData"],
    queryFn: getUser,
    retry: false,
  });
};

export const ProtectedRoute = () => {
  const { isLoading, data: user } = useUser();

  if (isLoading) {
    return <LoadingScreen />;
  }

  // Navigate to login route when authentication failed
  if (!user) {
    return <Navigate to={"/auth"} />;
  }

  return <Outlet />;
};
