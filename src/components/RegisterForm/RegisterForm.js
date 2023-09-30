import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { FormStyled } from './RegisterForm.styled';
import { Link } from 'react-router-dom';

export const RegisterForm = () => {
  const dispatch = useDispatch();


  const handleOnSubmit = async e => {
    e.preventDefault();

    const form = e.target;

    const userData = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    dispatch(register(userData))

    .then(() => {
      toast.success('Created!!!');
      console.log('Created!!!');
      // Тут ви можете виконати додаткову логіку після успішної реєстрації
    })
    .catch(error => {
      toast.error(error);
      console.log('ERROR')
      // Тут ви можете обробити помилки після невдалої реєстрації
    });
  };

  return (
    <FormStyled autoComplete="off" onSubmit={handleOnSubmit}>
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
      <Link to="/userMenu">Register</Link>
    </FormStyled>
  );
};
