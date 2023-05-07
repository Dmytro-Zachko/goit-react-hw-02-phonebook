import React from "react";
import { ContactItem } from "components/ContactItem/ContactItem";

export const ContactList = ({ contactList, onDelete }) => {
  return (
      <ul>
      {contactList.map(contact => {
        return (
          <ContactItem
            key={contact.id}
            contact={contact}
            onDelete={onDelete}
          ></ContactItem>
        );
      })}
    </ul>
  );
}; 
