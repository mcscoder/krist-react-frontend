import { useNavigate } from "react-router-dom";
import { LocalIcon } from "src/assets/icons";
import { Button } from "src/components/ui/button";
import { Input } from "src/components/ui/form";
import { Checkbox } from "src/components/ui/form/checkbox";
import { Link } from "src/components/ui/link";
import { AlertOverlay } from "src/components/ui/overlay/components";
import {
  registerInputSchema,
  useRegister,
} from "src/features/auth/api/register";
import { AuthForm } from "src/features/auth/components/auth-form";

export const RegisterForm = () => {
  const register = useRegister(<RegisterSuccessAlert />);
  return (
    <AuthForm
      h1="Create New Account"
      h2="Please enter details"
      schema={registerInputSchema}
      onSubmit={(data) => {
        register.mutate(data);
      }}
    >
      {({ register, formState }) => (
        <>
          <Input
            label="First Name"
            register={register("firstName")}
            error={formState.errors.firstName}
          />
          <Input
            label="Last Name"
            register={register("lastName")}
            error={formState.errors.lastName}
          />
          <Input
            label="Email Address"
            register={register("email")}
            error={formState.errors["email"]}
          />
          <Input
            label="Password"
            type="password"
            register={register("password")}
            error={formState.errors.password}
          />
          <label className="flex items-center gap-2">
            <Checkbox />
            <span>
              {"I agree to the "}
              <Link
                to={"#"}
                className="font-bold"
              >
                Terms & Conditions
              </Link>
            </span>
          </label>
          <Button
            size={"lg"}
            className="mt-4"
            type="submit"
          >
            Register
          </Button>
          <div className="flex items-center justify-center gap-1">
            {"Already have an account? "}
            <Link to={"/auth"}>Login</Link>
          </div>
        </>
      )}
    </AuthForm>
  );
};

const RegisterSuccessAlert = () => {
  const navigate = useNavigate();

  return (
    <AlertOverlay
      title="Account Created"
      description="Your account has been created"
      icon={
        <LocalIcon
          iconName="Successful"
          height={"auto"}
          width={"auto"}
        />
      }
      primaryOption={{
        text: "Back to login",
        onClick: () => {
          navigate("/auth");
        },
      }}
    />
  );
};
