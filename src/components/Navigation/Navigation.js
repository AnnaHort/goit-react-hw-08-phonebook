import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ListStyled, NavigationContainer, NavigationTextStyle } from './Navigation.styled';

export const Navigation = () => {
  return (
    <>
      <ListStyled>
        <li>
          <NavigationTextStyle to="/">Navigation</NavigationTextStyle>
        </li>
        <NavigationContainer>
          <li>
            <NavigationTextStyle to="/login">Login</NavigationTextStyle>
          </li>
          <li>
            <NavigationTextStyle to="/userMenu">Menu</NavigationTextStyle>
          </li>
        </NavigationContainer>
      </ListStyled>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
