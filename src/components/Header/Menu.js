import { NavLinkStyled } from './AuthNav.styled';

export const Menu = () => {
  return (
    <>
      <li>
        <NavLinkStyled to="/UserMenu">User Menu</NavLinkStyled>
      </li>
      <li>
        <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>
      </li>
    </>
  );
};
