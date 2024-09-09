import {
  AppFooter,
  AppHeader,
} from "src/components/layouts/app-layout/components";
import { Breadcrumb } from "src/components/ui/breadcrumb";
import { useBreadcrumb } from "src/components/ui/breadcrumb/useBreadcrumb";
import { PageBottom } from "src/components/ui/page-bottom";

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const { components } = useBreadcrumb();

  return (
    <div className="flex min-h-screen flex-col">
      <AppHeader />
      {components.length !== 0 && <Breadcrumb components={components} />}
      <main className="flex-1">{children}</main>
      <PageBottom />
      <AppFooter />
    </div>
  );
};
