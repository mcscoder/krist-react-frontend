import { createBrowserRouter } from "react-router-dom";

export const createRouter = () =>
  createBrowserRouter([
    {
      path: "app",
      lazy: async () => {
        const { AppRoot } = await import("src/app/routes/app/root");
        return { Component: AppRoot };
      },
      children: [
        {
          path: "",
          lazy: async () => {
            const { Home } = await import("src/app/routes/app/home");
            return { Component: Home };
          },
        },
      ],
    },
    {
      path: "auth",
      lazy: async () => {
        const { AuthRoot } = await import("src/app/routes/auth/root");
        return { Component: AuthRoot };
      },
      children: [
        {
          path: "",
          lazy: async () => {
            const { Login } = await import("src/app/routes/auth/login");
            return { Component: Login };
          },
        },
      ],
    },
    {
      path: "*",
      lazy: async () => {
        const { NotFound } = await import("src/app/routes/not-found");
        return { Component: NotFound };
      },
    },
  ]);
