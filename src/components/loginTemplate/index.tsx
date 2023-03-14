import * as styled from "./styles";
import { useNavigate } from "react-router-dom";
import { Form } from "@unform/web";
import { SubmitHandler, FormHandles } from "@unform/core";
import { Input } from "../input";
import * as yup from "yup";
import { useRef } from "react";

export interface ILoginTemplate {
  isCustomer?: boolean;
}

interface IFormErrors {
  [key: string]: string;
}

interface IFormData {
  email: string;
  password: string;
}

export const formValidationSchema: yup.Schema<IFormData> = yup.object().shape({
  email: yup.string().required("Campo obrigatório.").email("E-mail inválido."),
  password: yup
    .string()
    .required("Campo obrigatório.")
    .min(4, "Digite ao menos 3 caracteres"),
});

export const LoginTemplate: React.FC<ILoginTemplate> = ({ isCustomer }) => {
  const formRef = useRef<FormHandles>(null);
  const navigate = useNavigate();

  const handleSubmit: SubmitHandler<IFormData> = (data) => {
    formValidationSchema
      .validate(data, { abortEarly: false })
      .then((dadosValidados) => {
        navigate("/cadastro/usuario");
      })
      .catch((errors: yup.ValidationError) => {
        const validationErrors: IFormErrors = {};

        errors.inner.forEach((error) => {
          if (!error.path) return;

          validationErrors[error.path] = error.message;
        });

        formRef.current?.setErrors(validationErrors);
      });
  };

  return (
    <div>
      <styled.Column>
        <styled.ContainerImage />
        <styled.ContainerForm>
          <styled.ContainerLogo>
            <img
              src="/assets/telemetrixLogo.png"
              alt="Logo da empresa administradora"
            />
          </styled.ContainerLogo>
          {isCustomer && (
            <styled.ContainerLogo isCustomer={isCustomer}>
              <img
                src="/assets/customerLogo.png"
                alt="Logo da empresa cliente"
              />
            </styled.ContainerLogo>
          )}
          <Form ref={formRef} onSubmit={handleSubmit}>
            <styled.Field>
              <Input placeholder="Email" type="text" name="email" />
            </styled.Field>
            <styled.Field>
              <Input
                placeholder="Digite Sua Senha"
                type="password"
                name="password"
              />
            </styled.Field>
            <styled.Field>
              <button type="submit">Entrar</button>
            </styled.Field>
          </Form>
        </styled.ContainerForm>
      </styled.Column>
    </div>
  );
};
