import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addContact, deleteContact } from "./redux/contactsSlice";



function App() {
  const dispatch = useDispatch();
  const inputValue = useSelector((state)=> state.contacts.contacts.items);

  const [search, setsearch] = useState("");

  useEffect(() => {
    window.localStorage.setItem("profile", JSON.stringify(inputValue));
  }, [inputValue]);

  const addProfile = (profile) => {
    const finalProfile = {...profile, id: nanoid()}
    dispatch(addContact(finalProfile))
  };

  const deleteProfile = (profileid) => {
    dispatch(deleteContact(profileid))
  };

  const filter = (e) => {
    const filterValue = e.target.value;
    setsearch(filterValue);
  }

  console.log(inputValue);
  
  const filterItems = inputValue.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addProfile={addProfile}/>
      <SearchBox value={search} filter={filter}/>
      <ContactList items={filterItems} deleteProfile={deleteProfile} />
    </div>
  );
}

export default App;
