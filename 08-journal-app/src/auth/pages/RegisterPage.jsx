import { Link as RouterLink }       from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm }    from '../../hooks/';
import { useMemo, useState }   from 'react';
import { startCreatingUserWithEmailPassword } from '../../store/auth';

const formData = {
    email      : '',
    password   : '',
    displayName: ''
}

const formValidations = {
    email      : [ ( value ) => value.includes( '@' ), 'El correo debe tener un @' ],
    password   : [ ( value ) => value.length >= 6,     'El password debe tener mas de 6 letras' ],
    displayName: [ ( value ) => value.length >= 1,     'El nombre es obligatorio' ]
}

export const RegisterPage = () => {

    const dispacth = useDispatch();
    const [formSubmitted, setFormSubmitted] = useState(false);
    const { status, errorMessage } = useSelector( state => state.auth );
    const isCheckingAuthentication = useMemo( 
        () => status === 'checking', 
        [ status ]
    );

    const { 
        formState, displayName, email, password, onInputChange,
        isFormValid, displayNameValid, emailValid, passwordValid
    } = useForm( formData, formValidations );

    const onSubmit = ( event ) => {
        event.preventDefault();
        setFormSubmitted(true);

        if ( !isFormValid ) return;
        console.log( formState );
        dispacth( startCreatingUserWithEmailPassword( formState ) );
    }

    return (
        <AuthLayout title="Crear cuenta">
            {/* <h1>Form Valid: { isFormValid ? 'true' : 'false' }</h1> */}
            <form onSubmit={ onSubmit }>
                <Grid container>
                
                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                        <TextField 
                            label      ="Nombre completo" 
                            type       ="text" 
                            placeholder='Nombre completo' 
                            name       ='displayName'
                            value      = { displayName }
                            onChange   = { onInputChange }
                            fullWidth
                            error      = { !!displayNameValid && formSubmitted }
                            helperText = { displayNameValid }
                        />
                    </Grid>

                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                        <TextField 
                            label      ="Correo" 
                            type       ="email" 
                            placeholder='correo@google.com'
                            name       ='email'
                            value      = { email }
                            onChange   = { onInputChange }
                            fullWidth
                            error      = { !!emailValid && formSubmitted}
                            helperText = { emailValid }
                        />
                    </Grid>

                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                        <TextField 
                            label      ="Contraseña" 
                            type       ="password" 
                            placeholder='Contraseña'
                            name       ='password'
                            value      = { password }
                            onChange   = { onInputChange }
                            fullWidth
                            error      = { !!passwordValid && formSubmitted}
                            helperText = { passwordValid }
                        />
                    </Grid>
                    
                    <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
                        <Grid item xs={ 12 } display={ !!errorMessage ? '' : 'none' }>
                            <Alert severity='error'>{ errorMessage }</Alert>
                        </Grid>
                        <Grid item xs={ 12 }>
                            <Button
                                type   ='submit'
                                variant='contained'
                                fullWidth
                                disabled = { !isFormValid || isCheckingAuthentication }
                            >
                                Crear cuenta
                            </Button>
                        </Grid>
                    </Grid>


                    <Grid container direction='row' justifyContent='end'>
                        <Typography sx={{ mr: 2 }}>
                            ¿Ya tienes cuenta?
                        </Typography>

                        <Link 
                            component={ RouterLink } 
                            color   ='inherit' 
                            to      ="/auth/login"
                        >
                            Ingresar
                        </Link>
                    </Grid>

                </Grid>
            </form>
        </AuthLayout>
    );
}
