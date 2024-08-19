import { LocalIcon } from "src/assets/icons";
import { Button } from "src/components/ui/button";
import { Form, Input } from "src/components/ui/form";
import { Group } from "src/components/ui/group";
import {
  subscribeInputSchema,
  useSubscribe,
} from "src/features/footer/api/subscribe";

export const SubscribeForm = () => {
  const subscribe = useSubscribe();

  return (
    <Form
      schema={subscribeInputSchema}
      onSubmit={(data) => {
        subscribe.mutate(data);
      }}
      className="flex flex-col gap-5"
    >
      {({ register, formState }) => (
        <>
          <Group
            title="Subscribe"
            items={[
              "Enter your email below to be the first to know about new collections and product launches.",
            ]}
          >
            {(item) => <p>{item}</p>}
          </Group>
          <div className="relative">
            <LocalIcon
              iconName="Mail"
              className="absolute left-2 top-1/2 -translate-y-1/2"
            />
            <Input
              register={register("email")}
              error={formState.errors.email}
              variants={"outlined"}
              placeholder="abc@example.com"
              className="group border-white px-10 text-white ring-white"
            />
            <Button
              className="absolute right-2 top-1/2 -translate-y-1/2 hover:bg-white/10"
              variant={"ghost"}
              size={"icon"}
              startIcon={<LocalIcon iconName="ArrowRight" />}
              type="submit"
            />
          </div>
        </>
      )}
    </Form>
  );
};
