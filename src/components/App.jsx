import { Route, Routes } from 'react-router-dom';
import { GlobalStyle, SectionContainer } from './GlobalStyle';
import { Navigation } from './Navigation/Navigation';
import { lazy, useEffect } from 'react';
import { UserMenu } from './UserMenu/UserMenu';
import NavigationPage from './pages/NavigationPage/NavigationPage';
import { useDispatch } from 'react-redux';
import { fetchCurentUser } from 'redux/auth/authOperations';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

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

          <Route
            path="register"
            element={
              <RestrictedRoute
                redirectTo="/UserMenu"
                component={<RegisterPage />}
              />
            }
          />

          <Route
            path="login"
            element={
              <RestrictedRoute
                redirectTo="/UserMenu"
                component={<LoginPage />}
              />
            }
          />

          <Route
            path="contacts"
            element={
              <PrivateRoute
                redirectTo="/contacts"
                component={<ContactsPage />}
              />
            }
          />

          <Route
            path="UserMenu"
            element={
              <PrivateRoute redirectTo="/login" component={<UserMenu />} />
            }
          />
        </Route>
      </Routes>

      <GlobalStyle />
    </SectionContainer>
  );
};
