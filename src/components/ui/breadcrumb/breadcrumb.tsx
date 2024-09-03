import { Fragment } from "react/jsx-runtime";
import { LocalIcon } from "src/assets/icons";
import { Link, LinkProps } from "src/components/ui/link";

export type BreadcrumbProps = {
  components: LinkProps[];
};

export const Breadcrumb = ({ components }: BreadcrumbProps) => {
  return (
    <div className="content-container container my-14 flex items-center justify-start gap-x-2">
      {components.map((component, index) => {
        return (
          <Fragment key={index}>
            {index !== 0 && (
              <LocalIcon
                iconName="ChevronDown"
                width={16}
                height={16}
                className="-rotate-90"
              />
            )}
            <Link {...component} />
          </Fragment>
        );
      })}
    </div>
  );
};
