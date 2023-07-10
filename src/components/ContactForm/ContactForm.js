import { selectContacts } from 'Redux/selectors';
import s from './ContactForm.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'Redux/createSlice';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const isExsist = contacts.find(
      elem => elem.name.toLowerCase() === name.toLowerCase()
    );
    if (isExsist) {
      alert('Name already exsist!');
      return;
    }
    const contact = { name, number };
    dispatch(addContact(contact));
    setName('');
    setNumber('');
  };
  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        Name
        <input
          className={s.input}
          type="text"
          placeholder="John Smith"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <label className={s.label}>
        Number
        <input
          className={s.input}
          type="text"
          placeholder="111-11-11"
          value={number}
          onChange={e => setNumber(e.target.value)}
        />
      </label>
      <button className={s.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};
