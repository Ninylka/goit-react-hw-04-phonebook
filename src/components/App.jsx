
import {  useEffect, useState } from 'react';
import { ContainerDivPhonebook,TitlePhonebook, TitleContacts } from './FormContacts/FormContacts.styled';
import { FormContacts } from './FormContacts/FormContacts';
import { ListContacts } from './ListContacts/ListContacts';
import { Filter } from './Filter/Filter';

const initianalContacts = [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
{id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
{id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
{id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
]


export const  App = () => {
  const [contacts, setContacts] = useState( () => JSON.parse(localStorage.getItem('contacts')) ?? initianalContacts );
  const [filter, setFilter] = useState('');
  
 
 


useEffect(() => {localStorage.setItem('contacts', JSON.stringify(contacts))} ,
[contacts])



 const changeFilter = e => {
  setFilter(e.currentTarget.value);
 
}


  const checkContactExists = name => {
   
    return contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase());
  }
  
  const createUser = (data) => {
    const { name } = data;
    if (checkContactExists(name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    
setContacts(prevState => ([...prevState, data]))

  };

  const deleteContact = (contactId) => {
    setContacts(prevState => prevState.filter(contact => contact.id !== contactId)
      
    )
  }

  
    const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
    return (
      <ContainerDivPhonebook>
        <TitlePhonebook>Phonebook</TitlePhonebook>
        <FormContacts onSubmit={createUser}>
        </FormContacts>
        <TitleContacts>Contacts</TitleContacts> 
        <Filter value={filter} onFind={changeFilter}/>
        <ListContacts  contacts={filteredContacts}  onDelete={deleteContact}>
        </ListContacts>
      </ContainerDivPhonebook>
    );
  }


