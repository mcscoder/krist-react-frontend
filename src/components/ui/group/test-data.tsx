import { GroupProps } from "src/components/ui/group/group";
import { Link } from "src/components/ui/link";

export const categoryTestData: Omit<
  GroupProps<{ id: number; name: string }>,
  "children"
> = {
  title: <Link to={""}>Men</Link>,
  items: [
    {
      id: 1,
      name: "T-Shirts",
    },
    {
      id: 2,
      name: "Casual Shirts",
    },
    {
      id: 3,
      name: "Formal Shirts",
    },
    {
      id: 4,
      name: "Jackets",
    },
    {
      id: 5,
      name: "Blazers & Coats",
    },
  ],
};

export const footerInformationTestData: Omit<GroupProps<string>, "children"> = {
  title: "Information",
  items: ["My Account", "Login", "My Cart", "My Wishlist", "Checkout"],
};

export const footerServiceTestData: Omit<GroupProps<string>, "children"> = {
  title: "Service",
  items: [
    "About Us",
    "Career",
    "Delivery Information",
    "Privacy Policy",
    "Terms & Conditions",
  ],
};
