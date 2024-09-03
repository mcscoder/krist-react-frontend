import { Group } from "src/components/ui/group";
import { Link } from "src/components/ui/link";
import { useCategoryGroups } from "src/features/api/category-group";

export const CategoryGroups = () => {
  const { isLoading, data: categoryGroups } = useCategoryGroups();

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <div className="mt-3 grid grid-cols-4 gap-x-14 gap-y-10 bg-white p-10 shadow-md ring-1 ring-black/5">
      {categoryGroups?.data.map((categoryGroup, index) => (
        <Group
          key={index}
          title={
            <Link to={`/products/${categoryGroup.id}`}>
              {categoryGroup.name}
            </Link>
          }
          items={categoryGroup.categories}
        >
          {(category) => (
            <Link
              to={`/products/${categoryGroup.id}?categories=${category.id}`}
            >
              {category.name}
            </Link>
          )}
        </Group>
      ))}
    </div>
  );
};
