import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { nanoid } from "nanoid";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addContact, deleteContact } from "./redux/contactsSlice";
import { filters } from "./redux/filtersSlice";



function App() {
  const dispatch = useDispatch();

  const selectContacts = useSelector((state)=> state.contacts.contacts.items);
  const selectNameFilter = useSelector((state)=>state.filters.filters.name)

  const addProfile = (profile) => {
    const finalProfile = {...profile, id: nanoid()}
    dispatch(addContact(finalProfile))
  };

  const deleteProfile = (profileid) => {
    dispatch(deleteContact(profileid))
  };

  const filter = (e) => {
    const filterValue = e.target.value;
    const action = filters(filterValue);
    dispatch(action)
  }

  const filterItems = selectContacts.filter((item) => item.name.toLowerCase().includes(selectNameFilter.toLowerCase()));

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addProfile={addProfile}/>
      <SearchBox value={selectNameFilter} filter={filter}/>
      <ContactList items={filterItems} deleteProfile={deleteProfile} />
    </div>
  );
}

export default App;
