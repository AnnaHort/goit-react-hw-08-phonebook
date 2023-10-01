import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { FormStyled } from './LoginForm.styled';
import { logIn } from 'redux/auth/operations';
import { isLoggedIn } from 'redux/auth/selectors';
import { UserMenu } from 'components/UserMenu/UserMenu';



export const LoginForm = () => {
  const login = useSelector(isLoggedIn)
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
    <>
        {login ? <UserMenu/> :  <FormStyled onSubmit={handleSubmit}>
    <label>
      <input type="email" name="email" placeholder="Email" />
    </label>
    <label>
      <input type="password" name="password" placeholder="Password" />
    </label>
    <button>Log In</button>

    <Link to="/register">Registration</Link>
  </FormStyled>}
    </>

    
  );
};
