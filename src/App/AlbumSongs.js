import React, { useState, useEffect } from 'react';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Song from './Song';
import Album from './Album';
import Loading from './Loading';
import { connect } from 'react-redux';

// Acciones
import { addSongs, clearPlaylist } from './actions/playlist';

const AlbumSongs = ({ match, addSongs, clearPlaylist }) => {
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

    const play = () => {
        clearPlaylist();
        addSongs(songs);
    }

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
                        <Button variant="contained" onClick={play}>Reproducir todo</Button>
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

const mapDispatchToProps = (dispatch, props) => {
    return {
        props,
        addSongs: (songs) => dispatch(addSongs(songs)),
        clearPlaylist: () => dispatch(clearPlaylist()),
    }
};

export default connect(
    () => ({}),
    mapDispatchToProps,
)(AlbumSongs);