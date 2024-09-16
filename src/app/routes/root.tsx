import { Outlet, useLocation } from "react-router-dom";
import { LoadingScreen } from "src/components/ui/loading";
import { OverlayContainer } from "src/components/ui/overlay";
import { useDidUpdateEffect } from "src/hooks/did-update-effect";
import { useUser } from "src/lib/auth";

export const AppRouterRoot = () => {
  const { pathname } = useLocation();

  useDidUpdateEffect(() => {
    window.scroll({ top: 0, behavior: "smooth" });
  }, [pathname]);

  const { isFetched } = useUser();

  if (!isFetched) {
    return <LoadingScreen />;
  }

  return (
    <>
      <OverlayContainer />
      <Outlet />
    </>
  );
};
