import axios from 'axios';
import React, {useEffect} from 'react';
import {useForm} from 'react-hook-form';

const values= {
    first_name:"",
    last_name:"",
    email:"",
    password:"",
    birthday:""
}
const UsersForm = ({getUsers,userSelected,deselectUser}) => {
    const {handleSubmit,register,reset} = useForm()
    useEffect(() =>{
        if(userSelected){
            reset(userSelected)
        }else{
            reset(values)
        }
    },[deselectUser])

    const submit = (data) =>{
      console.log(data)
      if(userSelected){
         axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`,data)
              .then(() => 
              getUsers(),
              deselectUser())
              .catch(error => console.log(error.response?.data))
      
      }else {
      axios.post("https://users-crud1.herokuapp.com/users/", data)
            .then(() => getUsers())
            .catch(error => console.log(error.response?.data))
      }
        }
    return (
        <form
        className="users-form"
        onSubmit={handleSubmit(submit)}>
            <h2>New User</h2>
            <div className="input-container">
                <label htmlFor="first_name"><i className="fa-solid fa-user"></i></label>
                <input {...register("first_name")} type="text" id="first_name" placeholder='First name'/>
            </div>
            <div className="input-container">
                <label htmlFor="last_name"> <i className="fa-solid fa-user"></i></label>
                <input {...register("last_name")} type="text" id="last_name" placeholder='Last name'/>
            </div>
            <div className="input-container">
                <label htmlFor="email"><i className="fa-solid fa-envelope"></i></label>
                <input {...register("email")} type="text" id="email" placeholder='Email'/>
            </div>
            <div className="input-container">
                <label htmlFor="password"><i className="fa-solid fa-key"></i></label>
                <input {...register("password")} type="password" id="password" placeholder='Password'/>
            </div>
            <div className="input-container">
                <label htmlFor="birthday"><i className="fa-solid fa-cake-candles"></i></label>
                <input {...register("birthday")} type="date" id="birthday" placeholder='dd/mm/aaaa'/>
            </div>
            <button className='submit-button'>Upload</button>
        </form>
    );
};
export default UsersForm;