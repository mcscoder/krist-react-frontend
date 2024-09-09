import { Outlet, useLocation } from "react-router-dom";
import { OverlayContainer } from "src/components/ui/overlay";
import { useDidUpdateEffect } from "src/hooks/did-update-effect";

export const AppRouterRoot = () => {
  const { pathname } = useLocation();

  useDidUpdateEffect(() => {
    window.scroll({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <>
      <OverlayContainer />
      <Outlet />
    </>
  );
};
