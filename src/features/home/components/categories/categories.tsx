import React from "react";
import { CategoryCard } from "src/components/ui/card/category-card";
import { CarouselWithTitle } from "src/components/ui/carousel/carousel-with-title";
import { useCategoryGroups } from "src/features/api/category-group";
import "swiper/css";
import "swiper/css/navigation";

export const Categories = () => {
  const { isLoading, data } = useCategoryGroups();

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <CarouselWithTitle title="Shop by Categories">
      {data!.data.map(
        (categoryGroup, index): React.ReactNode => (
          <CategoryCard
            key={index}
            categoryGroup={categoryGroup}
          />
        )
      )}
    </CarouselWithTitle>
  );
};
