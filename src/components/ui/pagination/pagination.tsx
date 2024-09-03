import { useEffect } from "react";
import { LocalIcon } from "src/assets/icons";
import { Button } from "src/components/ui/button";
import { QUERY_KEY } from "src/constants";
import { useSearchParamsFilter } from "src/hooks/search-params-filter";

export type PaginationProps = {
  maxPageNumber: number;
  pageNumber?: number;
  onChange: (pageNumber: number) => void;
};

export const Pagination = ({
  maxPageNumber,
  pageNumber = 0,
  onChange = () => {},
}: PaginationProps) => {
  const pageNumbers = Array.from(
    { length: maxPageNumber + 1 },
    (_, index) => index
  );

  const { params, setValues } = useSearchParamsFilter(QUERY_KEY.PAGE);

  useEffect(() => {
    // Handle if search param is greater than max page number
    if (Number(params[0]) > maxPageNumber) {
      setValues(`${0}`);
    }
  }, [maxPageNumber]);

  const handleNavigate = (newPageNumber: number) => {
    setValues(`${newPageNumber}`);
    onChange(newPageNumber);
  };

  return (
    <div className="flex items-center justify-center gap-x-4">
      <Button
        variant={"ghost"}
        size={"icon"}
        onClick={() => handleNavigate(pageNumber - 1)}
        startIcon={
          <LocalIcon
            iconName="ChevronDown"
            className="rotate-90"
          />
        }
        disabled={pageNumber === 0}
      />
      {pageNumbers.map((index) => (
        <Button
          key={index}
          variant={index === pageNumber ? "filled" : "outlined"}
          size={"icon"}
          onClick={() => handleNavigate(index)}
        >
          {index}
        </Button>
      ))}
      <Button
        variant={"ghost"}
        size={"icon"}
        onClick={() => handleNavigate(pageNumber + 1)}
        startIcon={
          <LocalIcon
            iconName="ChevronDown"
            className="-rotate-90"
          />
        }
        disabled={pageNumber === maxPageNumber}
      />
    </div>
  );
};
