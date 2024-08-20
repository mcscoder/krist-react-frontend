import { Group } from "src/components/ui/group";
import { Link } from "src/components/ui/link";
import { useCategoryGroups } from "src/features/header/components/api/category-groups";

export const CategoryGroups = () => {
  const { isLoading, data } = useCategoryGroups();

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <>
      {data?.data.map((item, index) => (
        <Group
          key={index}
          title={<Link to={""}>{item.name}</Link>}
          items={item.categories}
        >
          {({ id, name }) => <Link to={`${id}`}>{name}</Link>}
        </Group>
      ))}
    </>
  );
};
