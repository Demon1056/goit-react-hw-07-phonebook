import { ContactForm } from './Form/Form';
import { ContactList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { PhoneBook, InformationArea } from './App.styled';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from './redux/operations';
// import { getContacts } from 'Api';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const contacts = useSelector(state => state.myContacts.contacts.items);
  const filter = useSelector(state => state.filter);

  const filterContacts = () => {
    return contacts.filter(({ name }) =>
      name.toUpperCase().includes(filter.toUpperCase())
    );
  };
  // const getC = async () => {
  //   const contacts = await getContacts()
  //   console.log(contacts);
  // }
  // getC()
  console.log('fuck you to');
  return (
    <PhoneBook>
      <ContactForm />
      <InformationArea>
        <h2>CONTACTS</h2>
        <Filter />
        {contacts.length > 0 && <ContactList data={filterContacts()} />}
      </InformationArea>
    </PhoneBook>
  );
};
