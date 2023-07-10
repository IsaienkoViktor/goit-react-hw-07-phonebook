import s from './ContactFilter.module.css';
import { useDispatch } from 'react-redux';
import { setFilter } from 'Redux/createSlice';

export function ContactFilter() {
  const dispatch = useDispatch();

  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        name="filter"
        onChange={e => dispatch(setFilter(e.target.value))}
      />
    </label>
  );
}
