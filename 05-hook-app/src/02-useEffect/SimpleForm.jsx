import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {

  const [formtSate, setFormState] = useState({
    username: 'Alex',
    email: 'alexander.moreno@correo.com'
  });

  const {username, email} = formtSate;

  const onInputChange = ({target}) => {
    const { name, value } = target;
    setFormState({
      ...formtSate,
      [ name ]: value
    });
  }

  useEffect( ()=> {
    // console.log('useEffect Called!')
  }, []);

  useEffect( ()=> {
    // console.log('formState changed!')
  }, [formtSate]);

  useEffect( ()=> {
    // console.log('email changed!')
  }, [email]);

  useEffect(() => {
    
  
    return () => {
      
    }
  }, [])
  

  return (
    <>
      <h1>Simple Form</h1>
      <hr />

      <input 
        type="text" 
        className="form-control" 
        placeholder="Username" 
        name="username"
        value={username}
        onChange={ onInputChange }
      />

      <input 
        type="email" 
        className="form-control mt-2" 
        placeholder="alexander.moreno@correo.com" 
        name="email"
        value={email}
        onChange={ onInputChange }
      />
      
      {
        (username === 'Alex2') && <Message/>
      }
      
    </>
  )
}
