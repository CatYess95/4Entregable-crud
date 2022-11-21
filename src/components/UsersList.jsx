import React from "react";

const UsersList = ({userList}) => {
    return (
        <ul className="container-user">
            {
                userList.map(list => (
                    <li key={list.id} className="data-user">
                        <div><b>First Name: </b>{list.first_name}</div>
                        <div><b>Last Name: </b>{list.last_name}</div>
                        <div><b>Email: </b>{list.email}</div>
                        <div><b>Birthday: </b>{list.birthday}</div>
                        <div className='user-button-container'>
                        <button onClick={() => selectUsers(list)} className="button-user">
                        <i class="fa-sharp fa-solid fa-pen-to-square"></i>
                        </button>
                        <button onClick={() => deleteUsers(list.id)} className="buttonn-user">
                        <i className="fa-sharp fa-solid fa-trash"></i>
                        </button>
                        </div>
                    </li>
                ))
            }
         </ul>
    );
};


export default UsersList;