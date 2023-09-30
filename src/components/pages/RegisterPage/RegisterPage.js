import { RegisterForm } from "components/RegisterForm/RegisterForm";
import { TitleStyle } from "./RegisterPage.styled";


 const RegisterPage = () => {
  return (
    <div>
      <TitleStyle>Register Page</TitleStyle>
      <RegisterForm/>
    </div>
  );
};

export default RegisterPage;