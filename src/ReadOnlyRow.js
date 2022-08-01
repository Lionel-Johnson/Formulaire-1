import React, { useContext, useState } from "react";
import UsersContext from "./store/users-context";
import Button from "./components/UI/Button";

const ReadOnlyRow = (props) => {
  const [location, setLocation] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const usersCtx = useContext(UsersContext);

  return (
    <tr>
      <td>{props.user.titre}</td>
      <td>{props.user.description}</td>
      <td>{props.user.date}</td>
      <td>{props.user.date1}</td>
      <td>{props.user.statut}</td>
      
      <td>
        <Button onClick={(event) => usersCtx.onEdit(event, props.user)}>
          Modifier
        </Button>
        <Button onClick={(event) => usersCtx.onDelete(event, props.user.id)}>
          Supprimer
        </Button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;