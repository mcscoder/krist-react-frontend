import { LocalIcon } from "src/assets/icons";
import { Group } from "src/components/ui/group";
import {
  footerInformationTestData,
  footerServiceTestData,
} from "src/components/ui/group/test-data";
import { Link } from "src/components/ui/link";
import { SubscribeForm } from "src/features/footer/components/subscribe-form";

export const AppFooter = () => {
  return (
    <div className="bg-[#131118] text-white">
      <footer className="container flex flex-col">
        <div className="my-12 grid grid-cols-4 gap-x-14">
          <section className="flex flex-col gap-5">
            <LocalIcon
              iconName="KristLogoLight"
              width={"auto"}
              height={"auto"}
              className="mb-3"
            />
            <div className="flex items-start gap-2">
              <LocalIcon iconName="Calling" />
              <p>(704) 555-0127</p>
            </div>
            <div className="flex items-start gap-2">
              <LocalIcon iconName="Mail" />
              <p>krist@example.com</p>
            </div>
            <div className="flex items-start gap-2">
              <LocalIcon iconName="Location" />
              <p>3891 Ranchview Dr. Richardson, California 62639</p>
            </div>
          </section>
          <Group {...footerInformationTestData}>
            {(name) => <Link to={""}>{name}</Link>}
          </Group>
          <Group {...footerServiceTestData}>
            {(name) => <Link to={""}>{name}</Link>}
          </Group>
          <SubscribeForm />
        </div>
        <hr className="opacity-20" />
        <div className="my-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <LocalIcon
              iconName="Visa"
              width={"auto"}
              height={"auto"}
            />
            <LocalIcon
              iconName="Mastercard"
              width={"auto"}
              height={"auto"}
            />
            <LocalIcon
              iconName="GooglePay"
              width={"auto"}
              height={"auto"}
            />
            <LocalIcon
              iconName="Amex"
              width={"auto"}
              height={"auto"}
            />
            <LocalIcon
              iconName="Paypal"
              width={"auto"}
              height={"auto"}
            />
          </div>
          <p>©2023 Krist All Rights are reserved</p>
          <div className="flex items-center gap-5">
            <Link to={""}>
              <LocalIcon
                iconName="Facebook"
                width={"auto"}
                height={"auto"}
              />
            </Link>
            <Link to={""}>
              <LocalIcon
                iconName="Instagram"
                width={"auto"}
                height={"auto"}
              />
            </Link>
            <Link to={""}>
              <LocalIcon
                iconName="Twitter"
                width={"auto"}
                height={"auto"}
              />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};
