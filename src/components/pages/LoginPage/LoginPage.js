import { LoginForm } from 'components/LoginForm/LoginForm';
import { TitleStyle } from './LoginPage.styled';

 const LoginPage = () => {
  return (
    <>
      <TitleStyle>Login Page</TitleStyle>
      <LoginForm />
    </>
  );
};

export default LoginPage;