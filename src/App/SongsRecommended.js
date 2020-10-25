import React, { useState, useEffect } from 'react';
import Song from './Song';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import Loading from './Loading';

const SongsRecommended = () => {
    const [songs, setSongs] = useState([{}]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchSongsAPI() {
            try {
                const res = await fetch(`/songs?_page=0&_limit=8&_expand=album`);
                const json = await res.json();
                setLoading(false);
                setSongs(json);
            } catch (err) {
                console.error("Error accediendo al servidor", err);
            }
        }

        fetchSongsAPI()
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
                    {songs.map(
                        song =>
                            <Grid key={`${song.id}`} item xs={12} sm={6} lg={3}>
                                <List>
                                    <Song song={song} album={song.album} />
                                </List>
                            </Grid>,
                    )
                    }
                </Grid>
            }
        </>
    )
}

export default SongsRecommended;