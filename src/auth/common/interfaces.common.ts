interface LoginI {
  email: string;
  password: string;
}

interface SigUpI {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export type InitialFormT = LoginI | SigUpI;

export type FormKeysTypes = Array<keyof InitialFormT>;

export interface FormPropsI {
  event: string;
  initialForm: InitialFormT;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}
