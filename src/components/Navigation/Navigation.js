import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ListStyled, NavigationTextStyle } from './Navigation.styled';
import { Menu } from 'components/Header/Menu';
import { AuthNav } from 'components/Header/AuthNav';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { isLoggedIn } from 'redux/auth/authSelectors';


export const Navigation = () => {

  const login = useSelector(isLoggedIn)

  return (
    <>
     <header>
      <ListStyled>
        <li>
          <NavigationTextStyle to="/">Navigation</NavigationTextStyle>
        </li>
        {login ? <Menu/> :  <AuthNav/>}

      </ListStyled>
      </header>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>

    </>
   
  );
};
