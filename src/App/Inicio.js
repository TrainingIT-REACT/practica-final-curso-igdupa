import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Song from './Song';
import Album from './Album';
import Loading from './Loading';

const Inicio = () => {
    const [loading, setLoading] = useState(true);
    const [songs, setSongs] = useState([{}]);
    const [albums, setAlbums] = useState([{}]);

    useEffect(() => {
        async function fetchSongsAPI() {
            try {
                const res = await fetch(`/songs?_page=0&_limit=8`);
                const json = await res.json();
                setLoading(false);
                setSongs(json);
            } catch (err) {
                console.error("Error accediendo al servidor", err);
            }
        }

        async function fetchAlbumsAPI() {
            try {
                const res = await fetch(`/albums?_page=0&_limit=4`);
                const json = await res.json();
                setLoading(false);
                setAlbums(json);
            } catch (err) {
                console.error("Error accediendo al servidor", err);
            }
        }

        fetchSongsAPI()
        fetchAlbumsAPI()
    }, []);


    return (
        <>
            { loading ?
                <Loading />
                :
                <>
                    <Typography variant="h4" component="h5">
                        Canciones recomendadas
                    </Typography>
                    <Divider />
                    <br />
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="flex-start"
                        spacing={5}
                    >
                        {songs.map(
                            song =>
                                <Grid key={`${song.id}`} item xs={12} sm={6} lg={3}>
                                    <List>
                                        <Song song={song} />
                                    </List>
                                </Grid>,
                        )
                        }
                    </Grid>
                    <br />
                    <br />
                    <br />
                    <br />
                    <Typography variant="h4" component="h5">
                        Albums recomendados
                    </Typography>
                    <Divider />
                    <br />
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="flex-start"
                        spacing={5}
                    >
                        {albums.map(
                            album =>
                                <Grid key={`${album.id}`} item xs={12} sm={6} lg={3} component={Link} to={`/album/${album.id}`} style={{ textDecoration: 'none' }}>
                                    <Album album={album} />
                                </Grid>,
                        )
                        }
                    </Grid>
                </>
            }
        </>
    );
}

export default Inicio;