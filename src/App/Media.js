import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';

import { connect } from 'react-redux';
import { changePosition } from './actions/playlist';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        maxWidth: 600,
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
}));

const Media = ({ media, changePosition }) => {
    const classes = useStyles();
    const theme = useTheme();
    /* La reproducción va a funcionar correctamente, siempre y cuando las canciones sean diferentes. En este caso de ejemplo,
    que las canciones son siempre iguales, no funciona bien, probar con Chip of the old block - S.O.S */

    const onEnded = () => {
        changePosition(media.position + 1);
    }

    const onNext = () => {
        changePosition(media.position + 1);
    }

    const onPrevious = () => {
        changePosition(media.position - 1);
    }

    return (
        <>
            <Card className={classes.root}>
                <CardMedia
                    className={classes.cover}
                    image={media.list[media.position] ? media.list[media.position].album.cover : ''}
                    title={media.list[media.position] ? media.list[media.position].album.name : ''}
                />
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography component="h5" variant="h5">
                            {media.list[media.position] && media.list[media.position].name}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            {media.list[media.position] && media.list[media.position].album.artist}
                        </Typography>
                    </CardContent>
                    <div className={classes.controls}>
                        <IconButton aria-label="previous" onClick={onPrevious}>
                            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                        </IconButton>
                        <IconButton aria-label="next" onClick={onNext}>
                            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                        </IconButton>
                        <audio onEnded={onEnded} id="song" src={media.list[media.position] ? media.list[media.position].audio : ''} controls autoPlay />
                    </div>
                </div>
            </Card>
            <br />
            <br />
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        media: state.playlist.media
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        changePosition: (position) => dispatch(changePosition(position)),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Media);