import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { OverlayLayout } from "src/components/ui/overlay/overlay-layout";
import { useOverlay } from "src/components/ui/overlay/use-overlay";

export const OverlayContainer = () => {
  const { component, dismiss } = useOverlay();
  const { pathname } = useLocation();

  useEffect(() => {
    if (component) {
      dismiss();
    }
  }, [pathname]);

  if (!component) {
    return <></>;
  }

  return <OverlayLayout onDismiss={dismiss}>{component}</OverlayLayout>;
};
