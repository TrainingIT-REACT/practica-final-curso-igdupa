import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

class Album extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            songs: []
        }
    }

    async componentDidMount() {
        try {
            const res = await fetch('/songs?album_id=1');
            const json = await res.json();
            this.setState((prevState) => ({
                ...prevState,
                loading: false,
                songs: json
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
                        <Grid item xs={12} sm={12} lg={4}>
                            <Card style={{ minWidth: 200, maxWidth: 400, }}>
                                <CardActionArea>
                                    <CardMedia
                                        image=""
                                        title=""
                                        style={{ height: 200 }}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {"album.name"}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {"album.artist"}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={12} lg={8}>
                            <List>
                                {this.state.songs.map(
                                    song =>
                                        <ListItem>
                                            <ListItemAvatar>
                                                <Avatar>
                                                    <LibraryMusicIcon />
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText
                                                primary={song.name}
                                                secondary={"Duración: " + song.seconds + " segundos."}
                                            />
                                            <ListItemSecondaryAction>
                                                <IconButton edge="end" aria-label="play">
                                                    <PlayCircleOutlineIcon />
                                                </IconButton>
                                            </ListItemSecondaryAction>
                                        </ListItem>,
                                )
                                }
                            </List>
                        </Grid>
                    </Grid>
                }
            </>
        );
    }
}

export default Album;