import { Link as RouterLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Google }      from '@mui/icons-material';
import { AuthLayout }  from '../layout/AuthLayout';
import { useForm }     from '../../hooks/';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { checkingAuthentication, startGoogleSignIn } from '../../../store/auth/';


export const LoginPage = () => {

    const dispatch = useDispatch();

    const { email, password, onInputChange } = useForm({
        email: 'alex@prueba.com',
        password: '123456'
    });

    const onSubmit = ( event ) => {
        event.preventDefault();
        console.log({ email, password });
        dispatch( checkingAuthentication() );
    }

    const onGoogleSignIn = () => {
        console.log('onGoogle SignIn');
        dispatch( startGoogleSignIn() );
    }

    return (
        <AuthLayout title="Login">
            <form onSubmit={ onSubmit }>
                <Grid container>
                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                        <TextField 
                            label   ="Correo" 
                            type    ="email" 
                            name    ="email"
                            value   ={ email }
                            onChange={ onInputChange }
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                        <TextField 
                            label="Contraseña" 
                            type="password" 
                            name="password"
                            value={ password }
                            onChange={ onInputChange }
                            fullWidth
                        />
                    </Grid>
                    
                    <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
                        <Grid item xs={ 12 } sm={ 6 }>
                            <Button 
                                type="submit" 
                                variant='contained' 
                                fullWidth
                            >
                                Login
                            </Button>
                        </Grid>

                        <Grid item xs={ 12 } sm={ 6 }>
                            <Button 
                                variant='contained' 
                                onClick={onGoogleSignIn}
                                fullWidth
                            >
                                <Google />
                                <Typography sx={{ ml: 1 }}>Google</Typography>
                            </Button>
                        </Grid>
                    </Grid>


                    <Grid container direction='row' justifyContent='end'>
                        <Link 
                            component={ RouterLink } 
                            color    ='inherit' 
                            to       ="/auth/register"
                        >
                            Crear una cuenta
                        </Link>
                    </Grid>

                </Grid>

            </form>

        </AuthLayout>
    );
}
