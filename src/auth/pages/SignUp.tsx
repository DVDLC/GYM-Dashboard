import { InitialFormT } from "../common/interfaces.common";
import { AuthForm } from "../components/Form";

export const SignUp = () => {
  const initialForm: InitialFormT = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  return (
    <AuthForm event="signup" initialForm={initialForm} onSubmit={() => {}} />
  );
};
