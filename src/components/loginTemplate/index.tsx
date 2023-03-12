import * as styled from "./styles";

export interface ILoginTemplate {
  isCustomer?: boolean;
}

export const LoginTemplate: React.FC<ILoginTemplate> = ({ isCustomer }) => {
  return (
    <div>
      <styled.Column>
        <styled.ContainerImage>
          <img src="/assets/bg-login.jpeg" alt="Banner" />
          <div>
            <svg
              viewBox="0 0 500 450"
              preserveAspectRatio="none"
              style={{ height: "100vh", width: "100%" }}
            >
              <path
                d="M0.00,92.27 C116.83,192.92 204.30,8.39 500.00,109.03 L500.00,0.00 L0.00,0.00 Z"
                style={{ stroke: "none", fill: "#ffffff" }}
              />
            </svg>
          </div>
        </styled.ContainerImage>
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
          <form>
            <styled.Field>
              <input
                placeholder="Email"
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </styled.Field>
            <styled.Field>
              <input
                placeholder="Digite Sua Senha"
                type="password"
                id="inputPassword5"
                className="form-control"
                aria-describedby="passwordHelpBlock"
              />
            </styled.Field>
            <styled.Field>
              <button>Entrar</button>
            </styled.Field>
          </form>
        </styled.ContainerForm>
      </styled.Column>
    </div>
  );
};
