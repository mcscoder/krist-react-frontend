import { CheckboxDropdown } from "src/components/ui/dropdown";
import { useAttributes } from "src/features/api/attribute";
import { useAttributesFilter } from "src/hooks/attributes-filter";

export type AttributeFiltersProps = {
  categoryGroupId: number;
};

export const AttributeFilters = ({
  categoryGroupId,
}: AttributeFiltersProps) => {
  const { params, addValues, deleteValues } = useAttributesFilter();
  const { isLoading, data: attributes } = useAttributes(categoryGroupId);

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <div className="flex flex-col gap-y-10">
      {attributes?.data.map(({ attribute, attributeValues }, index) => (
        <CheckboxDropdown
          key={index}
          dropdown={{ title: `Filter by ${attribute.name}` }}
          checkboxes={attributeValues.map((attributeValue) => ({
            checked: (() => {
              return (
                params[`${attribute.id}`]?.includes(`${attributeValue.id}`) ||
                false
              );
            })(),
            onChange: (checked) => {
              const attributeValueId = `${attributeValue.id}`;
              if (checked) {
                addValues(`${attribute.id}`, attributeValueId);
              } else {
                deleteValues(`${attribute.id}`, attributeValueId);
              }
            },
            children: attributeValue.name,
          }))}
        />
      ))}
    </div>
  );
};
