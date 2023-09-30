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
      </ListStyled>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
