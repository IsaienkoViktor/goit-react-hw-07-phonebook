import PropTypes from 'prop-types';
import s from './ContactItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'Redux/createSlice';

export function ContactItem({ id, name, number }) {
  const dispatch = useDispatch();
  return (
    <>
      <ul className={s.list}>
        <li className={s.item} key={id}>
          <span className={s.info}>{name}:</span>
          <span className={s.info}>{number}</span>
          <button
            className={s.btn}
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      </ul>
    </>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
