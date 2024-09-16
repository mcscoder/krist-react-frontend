import { Link } from "src/components/ui/link";
import { useLogout } from "src/features/api/logout";

export const HeaderAccountOptions = () => {
  const className = "py-2 px-4 hover:bg-black/10 hover:opacity-80 text-start";

  const logout = useLogout();

  return (
    <div className="flex w-max flex-col bg-white shadow-md ring-1 ring-black/5">
      <Link
        to={"/profile"}
        className={className}
      >
        My Account
      </Link>
      <Link
        to={"/orders"}
        className={className}
      >
        My Orders
      </Link>
      <button
        className={className}
        onClick={() => logout.mutate()}
      >
        Logout
      </button>
    </div>
  );
};
