
import { nanoid } from 'nanoid';
import { FormPhonebook,ButtonPhonebook,LabelPhonebook,InputPhonebookName,InputPhonebookNumber } from './FormContacts.styled';
import { useState } from 'react';

export const FormContacts = ({onSubmit}) => {
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');
  const [form, setForm] = useState({name: '', number: ''} );
const {name, number} = form;

  const handleChange = (e) => {
    const {name , value } = e.target;
setForm(prevState => ({...prevState, [name]: value}))
    // if (e.target.name === 'number') {
    //   const number = evt.target.value.replace(/[^\d-]/g, '');
    //   setNumber({ [evt.target.name]: number });
    // } else {
    //   setName({ [evt.target.name]: evt.target.value });
    // }
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


