import { ContactList } from './ContactList/ContactList';
import { GlobalStyle, SectionContainer } from './GlobalStyle';
import { QuizForm } from './QuizForm/QuizForm';

export const App = () => {

  return (
    <SectionContainer>
      <QuizForm />
      <ContactList />
      <GlobalStyle />
    </SectionContainer>
  );
};
