import { Group } from "src/components/ui/group";
import { Link } from "src/components/ui/link";
import { useCategoriesByCategoryGroup } from "src/features/api/category";
import { useCategoryGroups } from "src/features/api/category-group";
import { CategoryGroup } from "src/types";

export const HeaderCategoryGroups = () => {
  const { isLoading, data: categoryGroups } = useCategoryGroups();

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <div className="mt-3 grid grid-cols-4 gap-x-14 gap-y-10 bg-white p-10 shadow-md ring-1 ring-black/5">
      {categoryGroups?.map((categoryGroup, index) => (
        <HeaderCategoryGroup
          key={index}
          categoryGroup={categoryGroup}
        />
      ))}
    </div>
  );
};

const HeaderCategoryGroup = ({
  categoryGroup,
}: {
  categoryGroup: CategoryGroup;
}) => {
  const { isLoading, data: categories } = useCategoriesByCategoryGroup(
    categoryGroup.id
  );

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <Group
      title={
        <Link to={`/products/${categoryGroup.id}`}>{categoryGroup.name}</Link>
      }
      items={categories!.data}
    >
      {(category) => (
        <Link to={`/products/${categoryGroup.id}?categories=${category.id}`}>
          {category.name}
        </Link>
      )}
    </Group>
  );
};
