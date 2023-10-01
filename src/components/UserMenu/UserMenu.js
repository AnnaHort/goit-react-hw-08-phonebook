import { Link } from 'react-router-dom';
import {
  ContainerStyled,
  ListElementStyle,
  TitleStyle,
  UserData,
  UserMenuLinkStyle,
  UserMenuListStyle,
} from './UserMenu.styled';
import { useDispatch, useSelector } from 'react-redux';

import { logOut } from 'redux/auth/authOperations';
import { user } from 'redux/auth/authSelectors';

export const UserMenu = () => {
  const userData = useSelector(user);

  const { name, email } = userData;
  const dispatch = useDispatch()
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
            <UserMenuLinkStyle to="/contacts">My Phonebook</UserMenuLinkStyle>
          </li>
          <li>
            <UserMenuLinkStyle to="/login" onClick={()=> dispatch(logOut())}>Logout</UserMenuLinkStyle>
          </li>
        </UserMenuListStyle>
      </ContainerStyled>
    </>
  );
};
