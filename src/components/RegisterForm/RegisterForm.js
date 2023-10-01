import { useDispatch, useSelector } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import { FormStyled } from './RegisterForm.styled';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { UserMenu } from 'components/UserMenu/UserMenu';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';


export const RegisterForm = () => {
  const dispatch = useDispatch();
  const login = useSelector(selectIsLoggedIn);

  const handleOnSubmit = async e => {
    e.preventDefault();

    const form = e.currentTarget;

    const userData = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    if (
      userData.name !== '' &&
      userData.email !== '' &&
      userData.password !== ''
    ) {
      dispatch(register(userData));
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
        <FormStyled onSubmit={handleOnSubmit}>
          <label>
            <TextField
            id="outlined-basic" label="Name" variant="outlined"
              type="text"
              name="name"
              placeholder="Name"
              pattern="[A-Za-zА-Яа-яЁёІіЇїҐґЄє]+.*"
            />
          </label>
          <label>
            <TextField
            id="outlined-basic" label="Email" variant="outlined"
              type="email"
              name="email"
              placeholder="Email"
              pattern="[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}"
            />
          </label>
          <label>
            <TextField
            id="outlined-basic" label="Password" variant="outlined"
              type="password"
              name="password"
              placeholder="Password"
            />
          </label>
          <Button variant="contained" type='submit'>Register</Button>
        </FormStyled>
      )}
    </>
  );
};
