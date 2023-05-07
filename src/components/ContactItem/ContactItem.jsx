import React from "react";
import { Button } from "./ContactItem.styled";

export const ContactItem = ({ contact, onDelete }) => {
    const { id, name, number } = contact;

  return (
    <>
      <li>
        <span>{name}</span>:<span>{number}</span>

        <Button type="button" onClick={() => onDelete(id)}>
          Delete
        </Button>
      </li>
    </>
  );
};