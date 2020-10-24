import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        list: state.playlist.list
    };
}

const Media = ({ list }) => {

    return (
        <>
            <Typography>
                {''}
            </Typography>
            <Typography>
                {list[0] && list[0].name}
            </Typography>
            <IconButton aria-label="previous">
                <SkipPreviousIcon />
            </IconButton>
            <IconButton aria-label="next">
                <SkipNextIcon />
            </IconButton>
            <audio onEnded={''} id="song" src={list[0] ? list[0].audio : ''} controls autoPlay />
        </>
    );
}

export default connect(
    mapStateToProps
)(Media);