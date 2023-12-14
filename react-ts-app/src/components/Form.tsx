import { useForm } from "../hooks/useForm";

interface FormData {
    email: string;
    name: string;
    edad: number;
}

export const Form = () => {

    const { form, handleChange } = useForm<FormData>({ 
        email:'alexander@test.com', 
        name: 'Alexander',
        edad: 35
    });

    return (
        <>
            <h2 className="mt-5">CustomHooks</h2>
            <form autoComplete="off" >
                <div className="mb-3">
                    <label className="form-labe">Email:</label>
                    <input 
                        type="email"
                        className="form-control"
                        name="email"
                        onChange={ handleChange }
                        value={ form.email }
                    />
                </div>

                <div className="mb-3">
                    <label className="form-labe">Nombre:</label>
                    <input 
                        type="text"
                        className="form-control"
                        name="name"
                        onChange={ handleChange }
                        value={ form.name }
                    />
                </div>

                <div className="mb-3">
                    <label className="form-labe">Edad:</label>
                    <input 
                        type="number"
                        className="form-control"
                        name="edad"
                        onChange={ handleChange }
                        value={ form.edad }
                    />
                </div>

                <pre>{ JSON.stringify(form, null, 2) }</pre>
            </form>
        </>
    );
}
