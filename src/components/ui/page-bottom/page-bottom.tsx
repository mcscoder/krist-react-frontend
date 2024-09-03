import { LocalIcon } from "src/assets/icons";

export const PageBottom = () => {
  return (
    <section className="content-container container my-32">
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
  );
};
