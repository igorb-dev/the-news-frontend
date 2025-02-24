import * as yup from 'yup';

export const SchemaLogin = yup.object({
    email: yup
      .string()
      .email("digite um e-mail válido")
      .required("digite um e-mail")
  });

export interface IBody {
    email: string
}