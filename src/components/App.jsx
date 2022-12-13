import { ContactForm } from './Form/Form';
import { ContactList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { PhoneBook, InformationArea } from './App.styled';
import { useSelector } from 'react-redux';
import { getContacts } from 'Api';


export const App = () => {
  const contacts = useSelector(state => state.myContacts.contacts.items);
  const filter = useSelector(state => state.filter);

  const filterContacts = () => {
    return contacts.filter(({ name }) =>
      name.toUpperCase().includes(filter.toUpperCase())
    );
  };
  const getC = async () => {
    const contacts = await getContacts()
    console.log(contacts);
  }
  getC()
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
