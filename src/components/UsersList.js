import React, { Fragment, useContext } from "react";
import EditableRow from "./EditableRow";
import ReadOnlyRow from "../ReadOnlyRow";
import UsersContext from "../store/users-context";

import styles from "./UsersList.module.css";

const UsersList = () => {
  const usersCtx = useContext(UsersContext);

  return (
    <div className={styles.userList}>
      <h1></h1><br></br>
      <div className={styles.tableFlow}>
        <form>
          <table>
            <thead>
              <tr>
                <th>Titre</th>
                <th>Description</th>
                <th>Date début</th>
                <th>Date fin</th>
                <th>Statut</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {usersCtx.users.map((user) => (
                <Fragment key={user.id}>
                  {usersCtx.editUserId === user.id ? (
                    <EditableRow />
                  ) : (
                    <ReadOnlyRow user={user} />
                  )}
                </Fragment>
              ))}
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
};

export default UsersList;