import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { LocalIcon } from "src/assets/icons";
import { LocalImage, LocalImageProps } from "src/assets/images";

export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  const Image = useMemo<React.ReactNode>(() => {
    const src = ((): LocalImageProps["src"] => {
      const currentPath = location.pathname;
      if (currentPath.startsWith("/auth/register")) {
        return "register";
      }
      if (currentPath.startsWith("/auth/forgot-password")) {
        return "forgotPassword";
      }
      if (currentPath.startsWith("/auth/otp")) {
        return "otp";
      }
      return "login";
    })();
    console.log(src);

    return (
      <LocalImage
        src={src}
        className="size-full object-cover object-center"
      />
    );
  }, [location.pathname]);

  return (
    <div className="flex h-screen max-h-screen">
      <div className="relative h-full flex-1">
        <LocalIcon
          iconName="KristLogo"
          height={"auto"}
          width={"auto"}
          className="absolute left-[60px] top-[60px]"
        />
        {Image}
      </div>
      <div className="flex flex-[1.5] items-center">
        <div className="w-1/5"></div>
        {children}
      </div>
    </div>
  );
};
