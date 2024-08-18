import { useQuery } from "@tanstack/react-query";
import { Navigate, Outlet } from "react-router-dom";
import { api } from "src/lib/api-client";
import { User } from "src/types";
import { create } from "zustand";

const getUser = () => {
  return api.get<User>("/users/profile");
};

type AuthState = {
  user: User | undefined;
  login: (user: User) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: undefined,
  login: (user) => set({ user }),
  logout: () => set({ user: undefined }),
}));

export const useUser = () => {
  const authStore = useAuthStore();

  return useQuery({
    queryKey: ["userData"],
    queryFn: async () => {
      const user = await getUser();
      authStore.login(user.data);
      return user;
    },
  });
};

export const ProtectedRoute = () => {
  const { isLoading } = useUser();
  const { user } = useAuthStore();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Navigate to login route when authentication failed
  if (!user) {
    return <Navigate to={"/auth"} />;
  }

  return <Outlet />;
};
