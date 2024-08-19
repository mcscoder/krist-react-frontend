import {
  AppFooter,
  AppHeader,
} from "src/components/layouts/app-layout/components";

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <AppHeader />
      <main className="flex-1">{children}</main>
      <AppFooter />
    </div>
  );
};
