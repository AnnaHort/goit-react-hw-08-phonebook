import { Link } from 'react-router-dom';
import { ContainerStyled, TitleStyle } from './UserMenu.styled';

export const UserMenu = () => {
  return (
    <>
      <TitleStyle>User Menu</TitleStyle>
      <ContainerStyled>
        <p>UserName</p>
        <p>mango@mail.com</p>
        <Link to="/contacts">My Phonebook</Link>
        <Link to="/login">Logout</Link>
      </ContainerStyled>
    </>
  );
};
