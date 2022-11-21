import axios from 'axios';
import { useState, useEffect } from 'react'

import './App.css'

import UsersForm from './components/UsersForm';
import UsersList from './components/UsersList';

function App() {
  const [userList, setUserList] = useState([]);
  const [userSelected, setUserSelected] = useState (null);

  useEffect(() => {
     axios.get("https://users-crud1.herokuapp.com/users/")
      .then(res => setUserList(res.data));
    
  }, []);

   console.log(userList);

   const getUsers = () => {
    axios.get("https://users-crud1.herokuapp.com/users/")
    .then (res => setUserList(res.data));
   };

   const selectUsers = (user) => {
    setUserSelected(user);
   };

   const deselectUser = () => setUserList(null);

   const deleteUsers =(id) => {
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
    .then(() => getUsers())
   }

   console.log(userList)

  return (
    <div className="App">
     
      <UsersForm
      getUsers={getUsers}
      userSelected={userSelected}
      deselectUser={deselectUser}
      />
     
      <UsersList 
      userList={userList}
      selectUsers={selectUsers}
      deleteUsers={deleteUsers}
      />
    </div>
  )
}

export default App
