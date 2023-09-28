import { Route, Routes } from 'react-router-dom';

import { GlobalStyle, SectionContainer } from './GlobalStyle';

import { Navigation } from './Navigation/Navigation';

import { LoginPage } from './pages/LoginPage';
import { ContactsPage } from './pages/ContactsPage';
import { RegisterPage } from './pages/RegisterPage';

export const App = () => {
  return (
    <SectionContainer>
      <Routes>
        <Route path="/" element={<Navigation />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/contacts" element={<ContactsPage />}></Route>
      </Routes>

      {/* <QuizForm />
      <ContactList /> */}
      <GlobalStyle />
    </SectionContainer>
  );
};
