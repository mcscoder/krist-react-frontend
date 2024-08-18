import { createBrowserRouter } from "react-router-dom";

export const createRouter = () =>
  createBrowserRouter([
    {
      path: "",
      lazy: async () => {
        const { AppRouterRoot } = await import("src/app/routes/root");
        return { Component: AppRouterRoot };
      },
      children: [
        {
          path: "",
          lazy: async () => {
            const { AppRoot } = await import("src/app/routes/app/root");
            return { Component: AppRoot };
          },
          children: [
            {
              path: "",
              lazy: async () => {
                const { HomeRoute } = await import(
                  "src/app/routes/app/public/home"
                );
                return { Component: HomeRoute };
              },
            },
            {
              path: "",
              lazy: async () => {
                const { ProtectedRoute } = await import("src/lib/auth");
                return { Component: ProtectedRoute };
              },
              children: [
                {
                  path: "profile",
                  lazy: async () => {
                    const { ProfileRoute } = await import(
                      "src/app/routes/app/private/profile"
                    );
                    return { Component: ProfileRoute };
                  },
                },
              ],
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
                const { LoginRoute } = await import(
                  "src/app/routes/auth/login"
                );
                return { Component: LoginRoute };
              },
            },
            {
              path: "register",
              lazy: async () => {
                const { RegisterRoute } = await import(
                  "src/app/routes/auth/register"
                );
                return { Component: RegisterRoute };
              },
            },
            {
              path: "forgot-password",
              lazy: async () => {
                const { ForgotPasswordRoute } = await import(
                  "src/app/routes/auth/forgot-password"
                );
                return { Component: ForgotPasswordRoute };
              },
            },
            {
              path: "otp/:email",
              lazy: async () => {
                const { OtpRoute } = await import("src/app/routes/auth/otp");
                return { Component: OtpRoute };
              },
            },
            {
              path: "reset-password/:token",
              lazy: async () => {
                const { ResetPasswordRoute } = await import(
                  "src/app/routes/auth/reset-password"
                );
                return { Component: ResetPasswordRoute };
              },
            },
          ],
        },
        {
          path: "*",
          lazy: async () => {
            const { NotFoundRoute } = await import("src/app/routes/not-found");
            return { Component: NotFoundRoute };
          },
        },
      ],
    },
  ]);
