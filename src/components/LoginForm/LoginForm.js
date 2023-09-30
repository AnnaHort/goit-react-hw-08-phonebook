import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { FormStyled } from './LoginForm.styled';
import { logIn } from 'redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();
    
    const form = e.currentTarget;

    const userData = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    console.log(userData);

    dispatch(logIn(userData));

    form.reset();
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <label>
        <input type="email" name="email" placeholder="Email" />
      </label>
      <label>
        <input type="password" name="password" placeholder="Password" />
      </label>
      <button>Log In</button>
      {/* <Link to="/userMenu">Log In</Link> */}

      <Link to="/register">Registration</Link>
    </FormStyled>
  );
};
