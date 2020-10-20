import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import IconButton from '@material-ui/core/IconButton';

export default function Song(props) {
    return (
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
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="play">
                    <PlayCircleOutlineIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>);
}