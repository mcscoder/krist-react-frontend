import forgotPassword from "./forgot-password.jpeg";
import login from "./login.jpeg";
import otp from "./otp.jpeg";
import register from "./register.jpeg";
import chad from "./chad.png";
import chad2 from "./chad2.jpg";
import chad3 from "./chad3.png";
import productCard from "./product-card-image.png";
import avatar from "./avatar.png";

const image = {
  forgotPassword,
  login,
  otp,
  register,
  chad,
  chad2,
  chad3,
  productCard,
  avatar,
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
