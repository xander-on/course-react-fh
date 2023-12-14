import { ChangeEvent, useState } from "react";



export const useForm = <T extends Object>( initState:T ) => {

    const [form, setForm] = useState( initState );

    const handleChange = ( e:ChangeEvent<HTMLInputElement> ) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [ name ]: value
        })
    }


    return ({
        form,
        handleChange
    });
}
