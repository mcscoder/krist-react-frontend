import { Group } from "src/components/ui/group";
import { Link } from "src/components/ui/link";
import { useCategoryGroups } from "src/features/api/category-groups";

export const CategoryGroups = () => {
  const { isLoading, data } = useCategoryGroups();

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <div className="mt-3 grid grid-cols-4 gap-x-14 gap-y-10 bg-white p-10 shadow-md ring-1 ring-black/5">
      {data?.data.map((item, index) => (
        <Group
          key={index}
          title={<Link to={""}>{item.name}</Link>}
          items={item.categories}
        >
          {({ id, name }) => <Link to={`${id}`}>{name}</Link>}
        </Group>
      ))}
    </div>
  );
};
