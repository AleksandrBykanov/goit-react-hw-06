import css from "../ContactList/ContactList.module.css"
import Contact from "../Contact/Contact";

const ContactList = ({items, deleteProfile}) => {
  return (
    <div>
      <ul className={css.ul}>
        {items.map((item) => (
          <li className={css.li} key={item.id}>
            <Contact number={item.number} name={item.name} deleteProfile={()=>{deleteProfile(item.id)}} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
