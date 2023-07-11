import s from './ContactItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'Redux/selectors';
import { deleteContactThunk, getContactsThunk } from 'Redux/thunk';

export function ContactItem() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);
  const onDelete = id => {
    dispatch(deleteContactThunk(id));
  };
  return (
    <>
      <ul className={s.list}>
        {contacts.map(el => (
          <li className={s.item} key={el.id}>
            <span className={s.info}>{el.name}:</span>
            <span className={s.info}>{el.number}</span>
            <button
              className={s.btn}
              type="button"
              onClick={() => onDelete(el.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
