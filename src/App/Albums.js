import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';


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
                    <p>Cargando...</p>
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
                                <Grid key={album.id} item xs={12} sm={6} lg={4}>
                                    <Card style={{ minWidth: 200, maxWidth: 400, }}>
                                        <CardActionArea>
                                            <CardMedia
                                                image={album.cover}
                                                title={album.name}
                                                style={{ height: 200 }}
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    {album.name}
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    {album.artist}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
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