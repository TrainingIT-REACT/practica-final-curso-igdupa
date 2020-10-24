import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import { connect } from 'react-redux';

// Acciones
import { addSongs, clearPlaylist } from './actions/playlist';

const Song = ({ props, addSongs, clearPlaylist }) => {

    const play = () => {
        clearPlaylist();
        addSongs(props.song);
    }

    return (
        <Box m={1}>
            <Paper>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <LibraryMusicIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={props.song.name}
                        secondary={"Duración: " + props.song.seconds + " segundos."}
                    />
                    <ListItemSecondaryAction onClick={play}>
                        <IconButton edge="end" aria-label="play">
                            <PlayCircleOutlineIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            </Paper>
        </Box>
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
)(Song);