import { useDispatch, useSelector } from 'react-redux';
import {
  ContactButton,
  ListContact,
  ListEl,
  StyledSearchInput,
} from './ContactList.styled';
import { useEffect } from 'react';
import { deleteTask, fetchTasks } from 'redux/operations';
import { getTasks, selectFilter } from 'redux/selectors';
import { findContact } from 'redux/contactSlice';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  // Отримуємо частини стану
  const { items, isLoading, error } = useSelector(getTasks);

  // Викликаємо операцію
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  // Операція видалення
  const handleDelete = item => {
    dispatch(deleteTask(item.id));
  };

  // Фільтрація контактів
  const filteredItems = items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );


  return (
    <>
      <h2>Contacts</h2>
      <StyledSearchInput
        type="text"
        name="filter"
        placeholder="Search by name"
        value={filter}
        onChange={e => dispatch(findContact(e.target.value))}
      />
      <ListContact>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
          filteredItems.map(contact => (
            <ListEl key={contact.id}>
              <p>{contact.name}</p>
              <p>{contact.number}</p>
              <ContactButton onClick={() => handleDelete(contact)}>
                Delete
              </ContactButton>
            </ListEl>
          ))
        )}
      </ListContact>
    </>
  );
};
