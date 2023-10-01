import { Link } from 'react-router-dom';
import {
  ContainerStyled,
  ListElementStyle,
  TitleStyle,
  UserData,
  UserMenuListStyle,
} from './UserMenu.styled';
import { useDispatch, useSelector } from 'react-redux';
import { user } from 'redux/auth/selectors';
import { logOut } from 'redux/auth/operations';

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
            <Link to="/contacts">My Phonebook</Link>
          </li>
          <li>
            <Link to="/login" onClick={()=> dispatch(logOut())}>Logout</Link>
          </li>
        </UserMenuListStyle>
      </ContainerStyled>
    </>
  );
};
