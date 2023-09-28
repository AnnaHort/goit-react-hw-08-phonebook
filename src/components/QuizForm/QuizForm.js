import { AddContactBtn, Container, InputEl, StyledForm } from './QuizForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from 'redux/operations';
import { selectItems } from 'redux/selectors';


export const QuizForm = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectItems);
  
  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const newName = form.elements.name.value;
    const newPhoneNumber = form.elements.contacts.value; 

    const contactData = {
      name: newName,
      phone: newPhoneNumber,
    };

    if (contactData.name !== '' && contactData.phone !== '') {
  
      const contactExists = items.some(
        item =>
        item.name === contactData.name &&
        item.phone === contactData.phone
      );

      if (!contactExists) {

        dispatch(addTask(contactData));
        form.reset();
      } else {
        form.reset();
        alert('This contact already exists in your phonebook.');
      }
    } else {
      
      alert('Please enter both Name and Number');
    }
  };

  return (
    <>
      <h2>Phonebook</h2>
      <StyledForm onSubmit={handleSubmit}>
        <ul>
          <Container>
            <p>Name:</p>
            <InputEl
              name="name"
              placeholder="add new name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            />
          </Container>
          <Container>
            <p>Number:</p>
            <InputEl
              name="contacts"
              placeholder="add new number"
              pattern="\+?[0-9\s\-\(\)]+"
            />
          </Container>
          <li>
            <AddContactBtn>Add contact</AddContactBtn>
          </li>
        </ul>
      </StyledForm>
    </>
  );
};
