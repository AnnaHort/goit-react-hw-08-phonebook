import { Link } from 'react-router-dom';
import {
  ContainerStyled,
  ListElementStyle,
  ListStyle,
  TitleStyle,
  UserData,
  UserMenuListStyle,
} from './UserMenu.styled';

export const UserMenu = () => {
  return (
    <>
      <TitleStyle>User Menu</TitleStyle>
      <ContainerStyled>
        <ul>
          <ListElementStyle>
            <UserData>Your name: </UserData>
          </ListElementStyle>
          <ListElementStyle>
            <UserData>Your email: </UserData>
          </ListElementStyle>
        </ul>
        <UserMenuListStyle>
          <li>
            <Link to="/contacts">My Phonebook</Link>
          </li>
          <li>
            <Link to="/login">Logout</Link>
          </li>
        </UserMenuListStyle>
      </ContainerStyled>
    </>
  );
};
