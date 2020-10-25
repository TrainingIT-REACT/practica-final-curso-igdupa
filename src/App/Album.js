import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

export default function Album(props) {
    return (
        <Card style={{ minWidth: 200, maxWidth: 400, }}>
            <CardActionArea>
                {props.album.cover &&
                    <CardMedia
                        image={props.album.cover}
                        title={props.album.name}
                        style={{ height: 200 }}
                    />
                }
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.album.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.album.artist}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}