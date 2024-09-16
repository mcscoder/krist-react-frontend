import { LocalIcon } from "src/assets/icons";
import { Button } from "src/components/ui/button";
import { Link } from "src/components/ui/link";
import { NavLink } from "src/components/ui/nav-link";
import { UserAvatar } from "src/components/ui/user/user-avatar";
import { HeaderAccountOptions } from "src/features/header/components/header-account-options";
import { HeaderCategoryGroups } from "src/features/header/components/header-category-groups";
import { useUser } from "src/lib/auth";

export const AppHeader = () => {
  const { data: user } = useUser();

  return (
    <header className="content-container container my-6 flex items-center justify-between">
      <LocalIcon
        iconName="KristLogo"
        width={"auto"}
        height={"auto"}
      />
      <nav className="flex items-center justify-center gap-8">
        <NavLink to={"/"}>Home</NavLink>
        <div className="group relative">
          <NavLink
            to={"/"}
            endIcon={
              <LocalIcon
                iconName="ChevronDown"
                height={14}
                width={14}
              />
            }
          >
            Shop
          </NavLink>
          <div className="absolute left-1/2 top-full z-50 hidden w-max -translate-x-1/2 group-hover:block">
            <HeaderCategoryGroups />
          </div>
        </div>
        <NavLink to={"/"}>Our Story</NavLink>
        <NavLink to={"/"}>Blog</NavLink>
        <NavLink to={"/"}>Contact Us</NavLink>
      </nav>
      <div className="flex items-center justify-center gap-x-3">
        <Button
          variant={"ghost"}
          size={"icon"}
          startIcon={<LocalIcon iconName="Search" />}
        />
        <Button
          variant={"ghost"}
          size={"icon"}
          startIcon={<LocalIcon iconName="Heart" />}
        />
        <Button
          variant={"ghost"}
          size={"icon"}
          startIcon={<LocalIcon iconName="Bag" />}
        />
        {user ? (
          <div className="group relative">
            <Link to={"/profile"}>{<UserAvatar src={user.image.src} />}</Link>
            <div className="absolute left-1/2 top-full z-50 hidden w-max -translate-x-1/2 pt-3 group-hover:block">
              <HeaderAccountOptions />
            </div>
          </div>
        ) : (
          <Link to={"/auth"}>
            <Button className="ml-4">Login</Button>
          </Link>
        )}
      </div>
    </header>
  );
};
