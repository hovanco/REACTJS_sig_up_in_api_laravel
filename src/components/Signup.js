import {useForm} from 'react-hook-form';
import React,{useRef} from 'react';
// import { register } from './UserFunctions';
import './Style.css';

function Sigup() {
  const { register, errors, handleSubmit, watch } = useForm({}); // doan nay vao duoc database
  const password = useRef({});
  password.current = watch("password", "");
  const onSubmit = async data => {
    alert(JSON.stringify(data));
  };
  return (
    <form onSubmit={e => e.preventDefault()}>
     <label>Name</label>                     
      <input
          name="name"
          type="text"
          placeholder="Enter your name"
          ref={register({
            required: "You must specify a name",
            minLength: {
              value: 2,
              message: "Name must have at least 2 characters"
            }
          })}
      />
      {errors.name && <p>{errors.name.message}</p>}
      <label>Email</label> 
      <input
        name="email"
        ref={register({
          required: "You must specify a mail",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "invalid email address"
          }
        })}
      />
      {errors.email && <p>{errors.email.message}</p>}
      <label>Password</label>
      <input
        name="password"
        type="password"
        ref={register({
          required: "You must specify a password",
          minLength: {
            value: 8,
            message: "Password must have at least 8 characters"
          }
        })}
      />
      {errors.password && <p>{errors.password.message}</p>}

      <label>Confirm password</label>
      <input
        name="password_confirmation"
        type="password"
        ref={register({
          validate: value =>
            value === password.current || "The passwords do not match"
        })}
      />
      {errors.password_confirmation && <p>{errors.password_confirmation.message}</p>}
      <input type="submit" onClick={handleSubmit(onSubmit)} />
    </form>
  );
}
export default Sigup;
