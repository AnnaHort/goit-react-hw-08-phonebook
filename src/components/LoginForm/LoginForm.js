import { Link } from 'react-router-dom';
import {

  FormStyled,

} from './LoginForm.styled';

export const LoginForm = () => {
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <FormStyled autoComplete="off" onSubmit={handleSubmit}>
      <label>
        <input type="email" name="email" placeholder="Email" />
      </label>
      <label>
        <input type="password" name="password" placeholder="Password" />
      </label>
      <Link to="/userMenu">Log In</Link>

      <Link to="/register">Registration</Link>
    </FormStyled>
  );
};
