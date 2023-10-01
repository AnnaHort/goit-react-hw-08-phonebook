import { NavLinkStyled } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <>
      <li>
        <NavLinkStyled to="/login" >Login</NavLinkStyled>
      </li>
      <li>
        <NavLinkStyled to="/register">Register</NavLinkStyled>
      </li>
    </>
  );
};
