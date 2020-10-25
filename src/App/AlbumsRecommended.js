import React, { useState, useEffect } from 'react';
import Album from './Album';
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Loading from './Loading';

const AlbumsRecommended = () => {
    const [albums, setAlbums] = useState([{}]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchAlbumsAPI() {
            try {
                const res = await fetch(`/albums?_page=0&_limit=4&_embed=songs`);
                const json = await res.json();
                setLoading(false);
                setAlbums(json);
            } catch (err) {
                console.error("Error accediendo al servidor", err);
            }
        }

        fetchAlbumsAPI()
    }, []);

    return (
        <>
            { loading ?
                <Loading />
                :
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
            }
        </>
    )
}

export default AlbumsRecommended;