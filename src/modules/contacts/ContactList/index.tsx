import { useNavigate } from "react-router-dom";
import { useContactsData } from "../data";

const ContactList = () => {
  const { contactsData: contacts } =
    useContactsData();

  console.log(contacts);

  const navigate = useNavigate();

  const handleClickItem = (id: number) => {
    navigate(`/contacts/detail/${id}`);
  };

  return (
    <div>
      <h3>Contact List</h3>
      <ul>
        {contacts.map((c) => (
          <li
            style={{ cursor: "pointer" }}
            key={`item-${c.id}`}
            onClick={() => {
              handleClickItem(c.id);
            }}
          >
            <span>
              {c.name} - {c.phone}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
