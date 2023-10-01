import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ListStyled, NavigationTextStyle } from './Navigation.styled';
import { Menu } from 'components/Header/Menu';
import { AuthNav } from 'components/Header/AuthNav';
import { useAuth } from 'hooks';


export const Navigation = () => {

  const { isLoggedIn } = useAuth();


  return (
    <>
     <header>
      <ListStyled>
        <li>
          <NavigationTextStyle to="/">Navigation</NavigationTextStyle>
        </li>

        {isLoggedIn ? <Menu /> : <AuthNav />}

      </ListStyled>
      </header>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>

    </>
   
  );
};
