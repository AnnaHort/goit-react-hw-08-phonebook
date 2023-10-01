import { Route, Routes } from 'react-router-dom';
import { GlobalStyle, SectionContainer } from './GlobalStyle';
import { Navigation } from './Navigation/Navigation';
import { lazy, useEffect } from 'react';
import { UserMenu } from './UserMenu/UserMenu';
import NavigationPage from './pages/NavigationPage/NavigationPage';
import { useDispatch } from 'react-redux';
import { fetchCurentUser } from 'redux/auth/authOperations';
import { PrivateRoute } from './PrivateRoute';

const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurentUser());
  }, [dispatch]);

  return (
    <SectionContainer>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<NavigationPage />}></Route>

          <Route path="register" element={<RegisterPage />}></Route>
          <Route path="login" element={<LoginPage />}></Route>

          {/* <Route path="contacts" element={<ContactsPage />}></Route>
          <Route path="UserMenu" element={<UserMenu />}></Route> */}

          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/contacts" component={<LoginPage />} />
            }
          />

          <Route
            path="UserMenu"
            element={
              <PrivateRoute redirectTo="/UserMenu" component={<LoginPage />} />
            }
          />


        </Route>
      </Routes>

      <GlobalStyle />
    </SectionContainer>
  );
};
