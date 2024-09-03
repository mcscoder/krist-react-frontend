import { LocalIcon } from "src/assets/icons";
import { Button } from "src/components/ui/button";
import { NavLink } from "src/components/ui/nav-link";
import { CategoryGroups } from "src/features/header/components/category-groups";

export const AppHeader = () => {
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
            <CategoryGroups />
          </div>
        </div>
        <NavLink to={"/"}>Our Story</NavLink>
        <NavLink to={"/"}>Blog</NavLink>
        <NavLink to={"/"}>Contact Us</NavLink>
      </nav>
      <div className="flex items-center justify-center gap-1">
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
        <Button className="ml-4">Login</Button>
      </div>
    </header>
  );
};
