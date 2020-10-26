import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});


const ListPlayer = ({ media }) => {
    const classes = useStyles();
    return (
        <>
            <Typography variant="h4" component="h5">
                Lista reproducción
            </Typography>
            <Divider />
            <br />
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableBody>
                        {media.list.map((song) => (
                            <TableRow key={song.id}>
                                <TableCell component="th" scope="row">
                                    {song.name}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        media: state.playlist.media
    };
}

export default connect(
    mapStateToProps
)(ListPlayer);