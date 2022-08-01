import React, { useContext } from "react";
import UsersContext from "../store/users-context";
import Button from "./UI/Button";

const EditableRow = () => {
  const usersCtx = useContext(UsersContext);

  return (
    <tr>
      <td>
        <input
          type="text"
          placeholder="Entrer un titre"
          name="titre"
          value={usersCtx.editUserData.titre}
          onChange={usersCtx.onEditInputChange}
          required
        ></input>
      </td>
      <td>
        <input
          type="text"
          placeholder="Entrer une description"
          name="description"
          value={usersCtx.editUserData.description}
          onChange={usersCtx.onEditInputChange}
          required
        ></input>
      </td>
      <td>
        <input
          type="date"
          placeholder=""
          name="Date"
          value={usersCtx.editUserData.date}
          onChange={usersCtx.onEditInputChange}
          required
        ></input>
      </td>
      <td>
        <input
          type="date"
          placeholder=""
          name="date1"
          value={usersCtx.editUserData.date1}
          onChange={usersCtx.onEditInputChange}
          required
        ></input>
      </td>
      <td>
        <label>
          <select
            type="text"
            placeholder="Selectionner votre statut"
            name="statut"
            value={usersCtx.editUserData.statut}
            onChange={usersCtx.onEditInputChange}
            required
          >
            <option value="A réaliser">A réaliser</option>
            <option value="En cours">En cours</option>
            <option value="Fait">Fait</option>
            <option value="Archiver">Archiver</option>
          </select>
        </label>
      </td>
      <td></td>
      <td>
        <Button type="submit" onClick={usersCtx.onEditSave}>
          Save
        </Button>
      </td>
    </tr>
  );
};

export default EditableRow;