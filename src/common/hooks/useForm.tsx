import { useState } from "react";

export const useForm = <T,>(initialForm: T) => {
  const [formValue, setFormValue] = useState<T>(initialForm);

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const onReset = () => {
    setFormValue(initialForm);
  };

  return {
    formValue,
    onInputChange,
    onReset,
  };
};
