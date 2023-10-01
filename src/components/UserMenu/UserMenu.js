import {
  ContainerStyled,
  ListElementStyle,
  UserData,
  UserMenuLinkStyle,
  UserMenuListStyle,
} from './UserMenu.styled';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { logOut } from 'redux/auth/authOperations';
import { selectUser } from 'redux/auth/authSelectors';

export const UserMenu = () => {
  const userData = useSelector(selectUser);

  const { name, email } = userData;
  const dispatch = useDispatch()
  return (
    <>
 
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
            <UserMenuLinkStyle to="/contacts">My Phonebook </UserMenuLinkStyle>
          </li>
          <li>
          {/* <Link as={Link} to="/login" onClick={()=> dispatch(logOut())}>Logout</Link> */}
            <UserMenuLinkStyle as={Link} to="/login" onClick={()=> dispatch(logOut())}>Logout</UserMenuLinkStyle>
          </li>
        </UserMenuListStyle>
      </ContainerStyled>
    </>
  );
};
