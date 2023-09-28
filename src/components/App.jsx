import { Route, Routes } from 'react-router-dom';

import { GlobalStyle, SectionContainer } from './GlobalStyle';

import { Navigation } from './Navigation/Navigation';

export const App = () => {
  return (
    <SectionContainer>
      <Routes>
        <Route path="/" element={<Navigation />}></Route>
        <Route></Route>
      </Routes>

      {/* <QuizForm />
      <ContactList /> */}
      <GlobalStyle />
    </SectionContainer>
  );
};
