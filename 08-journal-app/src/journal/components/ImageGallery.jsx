import { ImageListItem, ImageList } from '@mui/material';
import { useSelector } from 'react-redux';


export const ImageGallery = ({ images=[] }) => {

    const { active } = useSelector( state => state.journal );

    const imgTemp = active.imagesTemp ? active.imagesTemp.map( img => img.url ) : [];

    const allImages = active.imagesTemp 
        ? [ ...images, ...imgTemp ]
        : images;

    return (
        <ImageList 
            cols     ={4} 
            rowHeight={200}
            sx       ={{ width: '100%', height: 500 }} 
        >
            { 
                allImages.map((image) => 
                <ImageListItem key={image}>
                    <img
                        src    ={ `${image}` }
                        srcSet ={ `${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x` }
                        alt    = 'imagen de la nota'
                        loading="lazy"
                    />
                </ImageListItem>
            )}
        </ImageList>
    );
}


