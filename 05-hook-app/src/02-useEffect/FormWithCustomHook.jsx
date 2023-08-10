// import { useEffect } from "react";
import { useForm } from "../hooks/useForm";


export const FormWithCustomHook = () => {

    const { 
        formtSate, 
        onInputChange, 
        onResetForm, 
        username, 
        email, 
        password 
    } = useForm({
        username : '',
        email    : '',
        password : ''
    });

    // const {username, email, password} = formtSate;
  
    return (
        <>
            <h1>Custom Hook Form</h1>
            <hr />

            <input 
                type        ="text" 
                className   ="form-control" 
                placeholder ="Username" 
                name        ="username"
                value       ={ username }
                onChange    ={ onInputChange }
            />

            <input 
                type        ="email" 
                className   ="form-control mt-2" 
                placeholder ="alexander.moreno@correo.com" 
                name        ="email"
                value       ={ email }
                onChange    ={ onInputChange }
            />

            <input 
                type        ="password" 
                className   ="form-control mt-2" 
                placeholder ="Contrasena" 
                name        ="password"
                value       ={ password }
                onChange    ={ onInputChange }
            />
            
            <button 
                onClick   ={ onResetForm } 
                className ='btn btn-primary mt-2'
            >Borrar</button>
        </>
    );
}
