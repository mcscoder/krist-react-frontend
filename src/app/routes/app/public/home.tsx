import { LocalIcon } from "src/assets/icons";
import { LocalImage } from "src/assets/images";
import { Button } from "src/components/ui/button";
import { BestSellers } from "src/features/home/components/best-sellers";
import { Categories } from "src/features/home/components/categories";
import { CustomerReviews } from "src/features/home/components/customer-reviews";
import { Deals } from "src/features/home/components/deals";

export const HomeRoute = () => {
  return (
    <div className="mb-20 flex flex-col gap-y-28">
      <section className="container">
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
      <section className="content-container container">
        <div className="flex justify-between">
          <div className="flex flex-col gap-y-4">
            <LocalIcon
              iconName="Box"
              width={40}
              height={40}
            />
            <div>
              <p className="font-bold">Free Shipping</p>
              <p className="text-sm text-gray-400">
                Free shipping for order above $150
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <LocalIcon
              iconName="Dollar"
              width={40}
              height={40}
            />
            <div>
              <p className="font-bold">Money Guarantee</p>
              <p className="text-sm text-gray-400">
                Within 30 days for an exchange
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <LocalIcon
              iconName="Headphone"
              width={40}
              height={40}
            />
            <div>
              <p className="font-bold">Online Support</p>
              <p className="text-sm text-gray-400">
                24 hours a day, 7 days a week
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <LocalIcon
              iconName="Payment"
              width={40}
              height={40}
            />
            <div>
              <p className="font-bold">Flexible Payment</p>
              <p className="text-sm text-gray-400">
                Pay with multiple credit cards
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
