import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { FormStyled } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleOnSubmit = async e => {
    e.preventDefault();

    const form = e.currentTarget;

    const userData = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
  
    console.log(userData);

    dispatch(register(userData));
    form.reset();
  };

  return (
    <FormStyled onSubmit={handleOnSubmit}>
      <label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          pattern="[A-Za-zА-Яа-яЁёІіЇїҐґЄє]+.*"
        />
      </label>
      <label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          pattern="[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}"
        />
      </label>
      <label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$"
        />
      </label>
      <button>Register</button>
    </FormStyled>
  );
};
