import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';

import { connect } from 'react-redux';
import { changePosition } from './actions/playlist';

const Media = ({ media, changePosition }) => {

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
            <Typography>
                {media.list[media.position] && media.list[media.position].album.name}
                <br />
                <small>{media.list[media.position] && media.list[media.position].album.artist}</small>
            </Typography>
            <Typography>
                {media.list[media.position] && media.list[media.position].name}
            </Typography>
            <IconButton aria-label="previous" onClick={onPrevious}>
                <SkipPreviousIcon />
            </IconButton>
            <IconButton aria-label="next" onClick={onNext}>
                <SkipNextIcon />
            </IconButton>
            <audio onEnded={onEnded} id="song" src={media.list[media.position] ? media.list[media.position].audio : ''} controls autoPlay />
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