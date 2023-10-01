import { NavLink } from 'react-router-dom';

export const Menu = () => {
  return (
    <>
      <li>
        <NavLink to="/UserMenu">User Menu</NavLink>
      </li>
      <li>
        <NavLink to="/contacts">Contacts</NavLink>
      </li>
      <li>
        <NavLink to='/login'>LogOut</NavLink>
      </li>
    </>
  );
};
