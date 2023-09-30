import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
    </>
  );
};
