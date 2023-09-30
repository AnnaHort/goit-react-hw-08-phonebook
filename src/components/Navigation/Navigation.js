import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ListStyled, NavigationTextStyle } from './Navigation.styled';

export const Navigation = () => {
  return (
    <>
      <ListStyled>
        <li>
          <NavigationTextStyle to="/">Navigation</NavigationTextStyle>
        </li>

        <li>
          <NavigationTextStyle to="/userMenu">Menu</NavigationTextStyle>
        </li>

        <li>
          <NavigationTextStyle to="/contacts">Contacts</NavigationTextStyle>
        </li>

        <li>
          <NavigationTextStyle to="/register">Register</NavigationTextStyle>
        </li>
      </ListStyled>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
