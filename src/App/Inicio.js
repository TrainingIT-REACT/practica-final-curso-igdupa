import React from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import SongsRecommended from './SongsRecommended';
import AlbumsRecommended from './AlbumsRecommended';


const Inicio = () => {
    return (
        <>
            <Typography variant="h4" component="h5">
                Canciones recomendadas
            </Typography>
            <Divider />
            <br />
            <SongsRecommended />
            <br />
            <br />
            <br />
            <br />
            <Typography variant="h4" component="h5">
                Albums recomendados
                </Typography>
            <Divider />
            <br />
            <AlbumsRecommended />
        </>
    );
}

export default Inicio;