import React, { useState, useEffect } from 'react';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import Song from './Song';
import Album from './Album';
import Loading from './Loading';

const AlbumSongs = ({ match }) => {
    const [loading, setLoading] = useState(true);
    const [songs, setSongs] = useState([{}]);
    const [album, setAlbum] = useState([{}]);

    useEffect(() => {
        async function fetchSongsAPI() {
            try {
                const res = await fetch(`/songs?album_id=${match.params.id}`);
                const json = await res.json();
                setLoading(false);
                setSongs(json);
            } catch (err) {
                console.error("Error accediendo al servidor", err);
            }
        }

        async function fetchAlbumAPI() {
            try {
                const res = await fetch(`/albums?id=${match.params.id}`);
                const json = await res.json();
                setLoading(false);
                setAlbum(json[0]);
            } catch (err) {
                console.error("Error accediendo al servidor", err);
            }
        }

        fetchSongsAPI()
        fetchAlbumAPI()
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
                    <Grid item xs={12} sm={12} lg={4}>
                        <Album album={album} />
                    </Grid>
                    <Grid item xs={12} sm={12} lg={8}>
                        <List>
                            {songs.map(
                                song =>
                                    <Song key={`${song.id}`} song={song}></Song>,
                            )
                            }
                        </List>
                    </Grid>
                </Grid>
            }
        </>
    );

}

export default AlbumSongs;