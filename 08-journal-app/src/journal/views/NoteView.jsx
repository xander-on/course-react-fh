import { DeleteOutline, SaveOutlined, UploadOutlined } from '@mui/icons-material';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { ImageGallery } from '../components'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks';
import { useEffect, useMemo, useRef } from 'react';
import { setActiveNote, startDeletingNote, startSaveNote, startUploadingFiles } from '../../store/journal';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

export const NoteView = () => {

    const { active:note, messageSaved, isSaving } = useSelector( state => state.journal );
    const dispatch = useDispatch();
    const { body, title, date, onInputChange, formState } = useForm( note );

    const fileInputRef = useRef();

    const dateString = useMemo( () => {
        const newDate = new Date( date );
        return newDate.toUTCString();
    }, [ date ] );

    useEffect(() => {
        dispatch( setActiveNote( formState ) );
    }, [ formState ]);

    useEffect(() => {
        if( messageSaved.length > 0 ) {
            Swal.fire('Nota actualizada', messageSaved, 'success');
        }
    }, [ messageSaved ]);


    const onFileInputChange = ({ target }) => {
        if( target.files === 0 ) return;

        dispatch( startUploadingFiles( target.files ) );
    }

    const onSaveNote = () => {
        dispatch( startSaveNote() );
    }

    const onDelete = () => {
        dispatch( startDeletingNote() );
    }

    return (
        <Grid
            className='animate__animated animate__fadeIn animate__faster'
            container 
            direction     ='row' 
            justifyContent='space-between' 
            alignItems    ='center' 
            sx={{ mb: 1 }}
        >
            <Grid item>
                <Typography fontSize={ 32 } fontWeight='light' >
                    { dateString }
                </Typography>
            </Grid>

            <Grid item>

                <Button
                    onClick={ onDelete }
                    sx={{ mr: 4 }}
                    color='error'
                >
                    <DeleteOutline />
                    Borrar
                </Button>

                <Button 
                    disabled={ isSaving }
                    color="primary" 
                    sx={{ padding: 2 }}
                    onClick={ onSaveNote }
                >
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    Guardar
                </Button>
            </Grid>

            <Grid container>
                <TextField 
                    fullWidth
                    type       ="text"
                    variant    ="filled"
                    placeholder="Ingrese un título"
                    label      ="Título"
                    sx={{ border: 'none', mb: 1 }}
                    name='title'
                    value={ title }
                    onChange={ onInputChange }
                />

                <TextField 
                    multiline
                    fullWidth
                    type       ="text"
                    variant    ="filled"
                    placeholder="¿Qué sucedió en el día de hoy?"
                    minRows    ={ 5 }
                    name='body'
                    value={ body }
                    onChange={ onInputChange }
                />
            </Grid>

            <Grid container sx={{ mt: 2 }}>

                <Grid item>
                    <input 
                        type="file" 
                        multiple
                        ref={ fileInputRef }
                        onChange={ onFileInputChange }
                        style={{ display: 'none' }}
                    />

                    <Button
                        color="primary"
                        disabled={ isSaving }
                        onClick={ () => fileInputRef.current.click() }
                    >
                        Subir Archivos
                        <UploadOutlined />
                    </Button>

                </Grid>

                <ImageGallery  images={ note.imageUrls }/>
            </Grid>

        </Grid>
    );
}
