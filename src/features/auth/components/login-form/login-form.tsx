import { Button } from "src/components/ui/button";
import { Input } from "src/components/ui/form";
import { Checkbox } from "src/components/ui/form/checkbox";
import { Link } from "src/components/ui/link";
import { loginInputSchema, useLogin } from "src/features/auth/api/login";
import { AuthForm } from "src/features/auth/components/auth-form";

export const LoginForm = () => {
  const fetchLogin = useLogin();

  return (
    <AuthForm
      h1="Welcome 👋"
      h2="Please login here"
      schema={loginInputSchema}
      onSubmit={(data) => {
        fetchLogin.mutate(data);
      }}
    >
      {({ register, formState }) => (
        <>
          <Input
            label="Email"
            register={register("email")}
            error={formState.errors.email}
          />
          <Input
            label="Password"
            type="password"
            register={register("password")}
            error={formState.errors.password}
          />
          <div className="flex items-center justify-between">
            <Checkbox>Remember Me</Checkbox>
            <Link to={"/auth/forgot-password"}>Forgot Password?</Link>
          </div>
          <Button
            size={"lg"}
            className="mt-4"
            type="submit"
          >
            Login
          </Button>
          <div className="flex items-center justify-center gap-1">
            {"Don't have an account? "}
            <Link to={"/auth/register"}>Register</Link>
          </div>
        </>
      )}
    </AuthForm>
  );
};
