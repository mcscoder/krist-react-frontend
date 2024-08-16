import forgotPassword from "./forgot-password.jpeg";
import login from "./login.jpeg";
import otp from "./otp.jpeg";
import register from "./register.jpeg";

const image = {
  forgotPassword,
  login,
  otp,
  register,
} satisfies Record<string, string>;

export type LocalImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  src: keyof typeof image;
};

export const LocalImage = ({ src, ...props }: LocalImageProps) => {
  return (
    <img
      src={image[src]}
      {...props}
    />
  );
};
