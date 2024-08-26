import { LocalIcon } from "src/assets/icons";
import { LocalImage } from "src/assets/images";
import { Button } from "src/components/ui/button";
import { cn } from "src/utils/cn";

export type DealsProps = {
  className?: string;
};

export const Deals = ({ className }: DealsProps) => {
  return (
    <div className={cn("flex gap-x-10", className)}>
      <div className="flex flex-1 flex-col justify-center gap-y-5">
        <h2 className="text-h2">Deals of the Month</h2>
        <p>
          Features limited-time discounts on a variety of top-rated products.
          Discover savings on tech, fashion, home essentials, and more. Act
          quickly, as these deals are available for a short time only. Check
          back regularly to make the most of these exclusive offers!
        </p>
        <div className="mt-3 flex gap-x-5">
          <div className="flex size-20 flex-col items-center justify-center gap-2 rounded-2xl border border-black/10">
            <p className="text-h3 font-bold">120</p>
            <p>Days</p>
          </div>
          <div className="flex size-20 flex-col items-center justify-center gap-2 rounded-2xl border border-black/10">
            <p className="text-h3 font-bold">18</p>
            <p>Hours</p>
          </div>
          <div className="flex size-20 flex-col items-center justify-center gap-2 rounded-2xl border border-black/10">
            <p className="text-h3 font-bold">15</p>
            <p>Mins</p>
          </div>
          <div className="flex size-20 flex-col items-center justify-center gap-2 rounded-2xl border border-black/10">
            <p className="text-h3 font-bold">10</p>
            <p>Secs</p>
          </div>
        </div>
        <Button
          endIcon={<LocalIcon iconName="ArrowRight" />}
          className="mt-5 w-fit"
          size={"lg"}
        >
          View All Products
        </Button>
      </div>
      <div className="flex-1">
        <div className="relative pt-[100%]">
          <LocalImage
            src="chad3"
            className="absolute inset-0 size-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
};
