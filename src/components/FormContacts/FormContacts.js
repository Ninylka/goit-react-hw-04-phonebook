
import { nanoid } from 'nanoid';
import { FormPhonebook,ButtonPhonebook,LabelPhonebook,InputPhonebookName,InputPhonebookNumber } from './FormContacts.styled';
import { useState } from 'react';

export const FormContacts = ({onSubmit}) => {

  const [form, setForm] = useState({name: '', number: ''} );
const {name, number} = form;

  const handleChange = (e) => {
    const {name , value } = e.target;
setForm(prevState => ({...prevState, [name]: value}))
    if (name === 'number') {
      const number = value.replace(/[^\d-]/g, '');
    setForm((prevForm) => ({...prevForm, [name]: number}));
    } else {
      setForm((prevForm) => ({ ...prevForm, [name]: value }));
    }
  };




 const  handleSubmit = (evt) => {
    evt.preventDefault();
   
    const contact = {
      name,
      number,
id: nanoid()
    };
    onSubmit(contact);
   setForm({name: '', number: ''})
  };


  return (
        
    <FormPhonebook onSubmit={handleSubmit}>
      <LabelPhonebook>
        Name
        <InputPhonebookName
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
      </LabelPhonebook>
      <LabelPhonebook>
        Number
        <InputPhonebookNumber
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          required
        />
      </LabelPhonebook>
      <ButtonPhonebook type="submit">Add contact</ButtonPhonebook>
    </FormPhonebook>

);

}


