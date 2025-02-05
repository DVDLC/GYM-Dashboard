import { InitialFormT } from "../common/interfaces.common";
import { AuthForm } from "../components/Form";

export const Login = () => {
  const initialForm: InitialFormT = {
    email: "",
    password: "",
  };

  return (
    <AuthForm event="login" initialForm={initialForm} onSubmit={() => {}} />
  );
};
