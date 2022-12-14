import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Loading, Report } from 'notiflix/build/notiflix-loading-aio';
import { ContactForm } from './Form/Form';
import { ContactList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { PhoneBook, InformationArea } from './App.styled';
import { fetchContacts } from './redux/operations';
import {
  getContacts,
  getIsLoading,
  getFilter,
  getError,
} from './redux/selectors';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const loading = useSelector(getIsLoading);
  const error = useSelector(getError);

  const filterContacts = () => {
    return contacts.filter(({ name }) =>
      name.toUpperCase().includes(filter.toUpperCase())
    );
  };

  return (
    <PhoneBook>
      {error &&
        Report.failure(
          'Sorry, something going wrong',
          'Please try again.',
          'Okay'
        )}
      {loading && !error
        ? Loading.arrows({ svgColor: ' aqua' })
        : Loading.remove()}
      <ContactForm />
      <InformationArea>
        <h2>CONTACTS</h2>
        <Filter />
        {contacts.length > 0 && <ContactList data={filterContacts()} />}
      </InformationArea>
    </PhoneBook>
  );
};
