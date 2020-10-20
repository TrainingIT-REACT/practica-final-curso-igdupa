import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import Album from "./Album";
import Loading from './Loading';

class Albums extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            albums: []
        }
    }

    async componentDidMount() {
        try {
            const res = await fetch('/albums');
            const json = await res.json();
            this.setState((prevState) => ({
                ...prevState,
                loading: false,
                albums: json
            }));
        } catch (err) {
            console.error("Error accediendo al servidor", err);
        }
    }

    render() {
        return (
            <>
                { this.state.loading ?
                    <Loading />
                    :
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="flex-start"
                        spacing={5}
                    >
                        {this.state.albums.map(
                            album =>
                                <Grid key={album.id} item xs={12} sm={8} lg={4} component={Link} to={`/album/${album.id}`} style={{ textDecoration: 'none' }}>
                                    <Album album={album} />
                                </Grid>
                        )
                        }
                    </Grid>
                }
            </>
        );
    }
}

export default Albums;