import { LocalIcon } from "src/assets/icons";
import { Button } from "src/components/ui/button";
import { NavLink } from "src/components/ui/nav-link";
import { CategoryGroups } from "src/features/header/components/category-groups";

export const AppHeader = () => {
  return (
    <header className="container my-6 flex items-center justify-between">
      <LocalIcon
        iconName="KristLogo"
        width={"auto"}
        height={"auto"}
      />
      <nav className="flex items-center justify-center gap-8">
        <NavLink to={"/home"}>Home</NavLink>
        <div className="group relative">
          <NavLink
            to={"/home"}
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
          <div className="absolute left-1/2 top-full hidden w-max -translate-x-1/2 group-hover:block">
            <div className="mt-3 grid grid-cols-4 gap-x-28 gap-y-10 bg-white p-10 shadow-md ring-1 ring-black/5">
              <CategoryGroups />
            </div>
          </div>
        </div>
        <NavLink to={"/home"}>Our Story</NavLink>
        <NavLink to={"/home"}>Blog</NavLink>
        <NavLink to={"/home"}>Contact Us</NavLink>
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
