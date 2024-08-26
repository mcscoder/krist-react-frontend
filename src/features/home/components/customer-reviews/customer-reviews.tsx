import { ReviewCard } from "src/components/ui/card/review-card";
import { CarouselWithTitle } from "src/components/ui/carousel/carousel-with-title";
import avatar from "src/assets/images/avatar.png";

export const CustomerReviews = () => {
  return (
    <CarouselWithTitle
      title={"What our Customer say's"}
      slidesPerView={3}
    >
      {[
        <ReviewCard
          key={1}
          username="Yasuo"
          career="Champion"
          comment="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam nostrum quisquam tempore aliquam ducimus exercitationem? Saepe repellendus facilis repudiandae nemo minima non provident ad similique qui. Delectus ea debitis dolorum?"
          imgSrc={avatar}
        />,
        <ReviewCard
          key={1}
          username="Yasuo"
          career="Champion"
          comment="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam nostrum quisquam tempore aliquam ducimus exercitationem? Saepe repellendus facilis repudiandae nemo minima non provident ad similique qui. Delectus ea debitis dolorum?"
          imgSrc={avatar}
        />,
        <ReviewCard
          key={1}
          username="Yasuo"
          career="Champion"
          comment="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam nostrum quisquam tempore aliquam ducimus exercitationem? Saepe repellendus facilis repudiandae nemo minima non provident ad similique qui. Delectus ea debitis dolorum?"
          imgSrc={avatar}
        />,
        <ReviewCard
          key={1}
          username="Yasuo"
          career="Champion"
          comment="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam nostrum quisquam tempore aliquam ducimus exercitationem? Saepe repellendus facilis repudiandae nemo minima non provident ad similique qui. Delectus ea debitis dolorum?"
          imgSrc={avatar}
        />,
      ]}
    </CarouselWithTitle>
  );
};
