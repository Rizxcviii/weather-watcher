import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
// import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
// import PlayArrowIcon from '@material-ui/icons/PlayArrow';
// import SkipNextIcon from '@material-ui/icons/SkipNext';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        height: "220px",
        padding:"10px",
        margin:"12px",
        opacity: "0.7"
    },
    details: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    content: {
    },
    cover: {
        width: 250,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 0,
    },
}));

export default function Infocard({content, secondcontent}) {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Card className={classes.root}>
            <div className={classes.details}>
                <CardContent className={classes.content} style={{width:"50px"}}>
                    <Typography component="h5" variant="h5">
                        {content}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        {secondcontent}
                    </Typography>
                </CardContent>
                <div className={classes.controls}>
                    <IconButton aria-label="previous">
                    </IconButton>
                    <IconButton aria-label="play/pause">
                    </IconButton>
                    <IconButton aria-label="next">
                    </IconButton>
                </div>
            </div>
            <CardMedia
                className={classes.cover}
                image="https://www.novinite.com/media/images/2019-07/photo_verybig_198527.jpg"
                title="Live from space album cover"
            />
        </Card>
    );
}