import { Route, Routes } from 'react-router-dom';

import { GlobalStyle, SectionContainer } from './GlobalStyle';

import { Navigation } from './Navigation/Navigation';

import { LoginPage } from './pages/LoginPage/LoginPage';
import { ContactsPage } from './pages/ContactsPage/ContactsPage';
import { RegisterPage } from './pages/RegisterPage/RegisterPage';

export const App = () => {
  return (
    <SectionContainer>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="register" element={<RegisterPage />}></Route>
          <Route path="login" element={<LoginPage />}></Route>
          <Route path="contacts" element={<ContactsPage />}></Route>
        </Route>
      </Routes>

      <GlobalStyle />
    </SectionContainer>
  );
};
