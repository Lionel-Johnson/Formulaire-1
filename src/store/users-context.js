import { createContext, useState, useEffect } from "react";

let isInitial = true;

const UsersContext = createContext({
  users: [],
  editUserId: null,
  editUserData: {
    titre: "",
    description: "",
    date: "",
    date1: "",
    statut: "",
  },
  onAddUserHandler: (user) => {},
  onDeleteHandler: (event, userId) => {},
  onEditInputChangeHandler: (event) => {},
  onEditHandler: (event, user) => {},
  onEditSaveHandler: (event) => {},
});

export function UsersContextProvider(props) {
  const [users, setUsers] = useState([]);
  const [editUserId, setEditUserId] = useState(null);
  const [editUserData, setEditUserData] = useState({
    titre: "",
    description: "",
    date: "",
    date1: "",
    statut: "",
  });

  useEffect(() => {
    if (isInitial) {
      const localData = JSON.parse(localStorage.getItem("users"));
      localData && setUsers(localData);
      isInitial = false;
    } else {
      localStorage.setItem("users", JSON.stringify(users));
    }
  }, [users]);

  const onAddUserHandler = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  const onDeleteHandler = (event, userId) => {
    event.preventDefault();
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
  };

  const onEditInputChangeHandler = (event) => {
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newUserData = { ...editUserData };
    newUserData[fieldName] = fieldValue;

    setEditUserData(newUserData);
  };

  const onEditHandler = (event, user) => {
    event.preventDefault();
    setEditUserId(user.id);

    const formValues = {
      titre: user.titre,
      description: user.description,
      date: user.date,
      date1: user.date1,
      statut: user.statut,
    };

    setEditUserData(formValues);
  };

  const onEditSaveHandler = (event) => {
    event.preventDefault();

    const editedUser = {
      id: editUserId,
      titre: editUserData.titre,
      description: editUserData.description,
      date: editUserData.date,
      date1: editUserData.date1,
      statut: editUserData.statut,
    };

    const updatedUsers = [...users];
    const index = users.findIndex((user) => user.id === editUserId);
    updatedUsers[index] = editedUser;

    setUsers(updatedUsers);
    setEditUserId(null);
  };

  const context = {
    users: users,
    editUserId: editUserId,
    editUserData: editUserData,
    onAddUser: onAddUserHandler,
    onDelete: onDeleteHandler,
    onEditInputChange: onEditInputChangeHandler,
    onEditSave: onEditSaveHandler,
    onEdit: onEditHandler,
  };

  return (
    <UsersContext.Provider value={context}>
      {props.children}
    </UsersContext.Provider>
  );
}

export default UsersContext;