import { useEffect } from "react";
import { LocalIcon } from "src/assets/icons";
import { LocalImage } from "src/assets/images";
import { useBreadcrumb } from "src/components/ui/breadcrumb/useBreadcrumb";
import { Button } from "src/components/ui/button";
import { BestSellers } from "src/features/home/components/best-sellers";
import { Categories } from "src/features/home/components/categories";
import { CustomerReviews } from "src/features/home/components/customer-reviews";
import { Deals } from "src/features/home/components/deals";

export const HomeRoute = () => {
  const { setComponents } = useBreadcrumb();

  useEffect(() => {
    setComponents([]);
  }, []);

  return (
    <div className="flex flex-col gap-y-28">
      <section className="container mt-20">
        <div className="relative">
          <LocalImage src="chad" />
          <div className="absolute left-28 top-1/2 flex -translate-y-1/2 flex-col gap-4">
            <h3 className="text-h3">Classic Exclusive</h3>
            <h2 className="text-h2 font-bold">{"Gigachad's collection"}</h2>
            <h4 className="text-h4">UPTO 40% OFF</h4>
            <div className="mt-5">
              <Button
                size={"lg"}
                endIcon={<LocalIcon iconName="ArrowRight" />}
              >
                Shop Now
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="content-container container">
        <Categories />
      </section>
      <section className="content-container container">
        <BestSellers />
      </section>
      <div className="bg-gray-400">
        <section className="content-container container">
          <Deals />
        </section>
      </div>
      <section className="content-container container">
        <CustomerReviews />
      </section>
      <section className="content-container container">
        <div className="flex flex-col gap-14">
          <div className="flex justify-center">
            <h3 className="text-h3">Our Instagram stories</h3>
          </div>
          <div className="grid grid-cols-4 gap-8">
            <div>
              <div className="relative pt-[100%]">
                <LocalImage
                  src="register"
                  className="absolute inset-0 size-full object-cover object-top"
                />
              </div>
            </div>
            <div>
              <div className="relative pt-[100%]">
                <LocalImage
                  src="chad2"
                  className="absolute inset-0 size-full object-cover object-top"
                />
              </div>
            </div>
            <div>
              <div className="relative bg-neutral-700 pt-[100%]">
                <LocalImage
                  src="chad3"
                  className="absolute inset-0 size-full object-cover object-top"
                />
              </div>
            </div>
            <div>
              <div className="relative pt-[100%]">
                <LocalImage
                  src="otp"
                  className="absolute inset-0 size-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
