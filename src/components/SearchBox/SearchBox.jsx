import css from "../SearchBox/SearchBox.module.css";

const SearchBox = ({ value, filter }) => {
  return (
    <label htmlFor="search" className={css.label}>Find contacts by name
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={filter}
        name="search"
      />
    </label>
  );
};
export default SearchBox;
