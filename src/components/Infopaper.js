import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

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

const weathertheme = (theme) => {
    // console.log("THEME", theme)
    if(theme==='Clouds'){
        return "https://www.novinite.com/media/images/2019-07/photo_verybig_198527.jpg";
    }
    else if(theme==="Rain"){
        return "https://media.istockphoto.com/photos/open-black-umbrella-in-wet-weather-autumn-rain-deep-sorrow-wet-of-picture-id1053791954?k=6&m=1053791954&s=612x612&w=0&h=OENo5DmqkLaAKhesTwlRIGsdgxcn4JQ5H2PNzo3HQYg=";
    }
    else if(theme==="Clear"){
        return "https://scx2.b-cdn.net/gfx/news/hires/2019/palmtree.jpg";
    }
    else return "https://ak4.picdn.net/shutterstock/videos/3913154/thumb/8.jpg";
};

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
                    <IconButton aria-label="">
                    </IconButton>
                    <IconButton aria-label="">
                    </IconButton>
                    <IconButton aria-label="">
                    </IconButton>
                </div>
            </div>
            <CardMedia
                className={classes.cover}
                image={weathertheme(content)}
                title="Weather theme image"
            />
        </Card>
    );
}