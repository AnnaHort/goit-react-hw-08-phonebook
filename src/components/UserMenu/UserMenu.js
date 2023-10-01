import { Link } from 'react-router-dom';
import {
  ContainerStyled,
  ListElementStyle,
  TitleStyle,
  UserData,
  UserMenuListStyle,
} from './UserMenu.styled';
import { useSelector } from 'react-redux';
import { user } from 'redux/auth/selectors';

export const UserMenu = () => {
  const userData = useSelector(user);
  console.log(userData);
const {name, email} = userData;
  return (
    <>
      <TitleStyle>User Menu</TitleStyle>
      <ContainerStyled>
        <ul>
          <ListElementStyle>
            <UserData>Your name: {name} </UserData>
          </ListElementStyle>
          <ListElementStyle>
            <UserData>Your email: {email}</UserData>
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
