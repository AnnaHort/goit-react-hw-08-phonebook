import { useDispatch, useSelector } from 'react-redux';

import { FormStyled } from './LoginForm.styled';
import { logIn } from 'redux/auth/authOperations';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { UserMenu } from 'components/UserMenu/UserMenu';

import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

export const LoginForm = () => {
  const login = useSelector(selectIsLoggedIn);
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
            <TextField id="outlined-basic" label="Email" variant="outlined"  type="email" name="email" placeholder="Email" />
          </label>
          <label>
            <TextField id="outlined-basic" label="Password" variant="outlined" type="password" name="password" placeholder="Password" />
          </label>
          <Button variant="contained" type='submit'>Log In</Button>

        </FormStyled>
      )}
    </>
  );
};
