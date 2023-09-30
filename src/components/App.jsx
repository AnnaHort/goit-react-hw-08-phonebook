import { Route, Routes } from 'react-router-dom';
import { GlobalStyle, SectionContainer } from './GlobalStyle';
import { Navigation } from './Navigation/Navigation';
import { lazy } from 'react';
import { UserMenu } from './UserMenu/UserMenu';
import NavigationPage from './pages/NavigationPage/NavigationPage';

// const Movies = lazy(() => import('../components/Movies/MoviesPages'));
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));

export const App = () => {
  return (
    <SectionContainer>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<NavigationPage />}></Route>

          <Route path="register" element={<RegisterPage />}></Route>
          <Route path="login" element={<LoginPage />}></Route>
          <Route path="contacts" element={<ContactsPage />}></Route>
          <Route path="UserMenu" element={<UserMenu />}></Route>
        </Route>
      </Routes>

      <GlobalStyle />
    </SectionContainer>
  );
};
