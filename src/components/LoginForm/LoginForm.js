import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { FormStyled } from './LoginForm.styled';
import { logIn } from 'redux/auth/authOperations';
import { isLoggedIn } from 'redux/auth/authSelectors';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const LoginForm = () => {
  const login = useSelector(isLoggedIn);
  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();

    const form = e.currentTarget;

    const userData = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    if (userData.email !== '' && userData.password !== '') {
      dispatch(logIn(userData));

      form.reset();
    } else {
      alert('please fill in all input fields');
    }
  };

  return (
    <>
      {login ? (
        <UserMenu />
      ) : (
        <FormStyled onSubmit={handleSubmit}>
          <label>
            <input type="email" name="email" placeholder="Email" />
          </label>
          <label>
            <input type="password" name="password" placeholder="Password" />
          </label>
          <button>Log In</button>

          <Link to="/register">Registration</Link>
        </FormStyled>
      )}
    </>
  );
};
