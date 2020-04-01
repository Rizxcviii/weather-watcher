import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        height: "220px",
        padding:"10px",
        margin:"12px",
        opacity: "0.7"
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function Detailspaper({content, secondcontent, thirdcontent}) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textPrimary" gutterBottom>
                    {content}
                </Typography>
                <br/>
                <Typography variant="h5" component="h2">
                    {secondcontent}
                </Typography>
                <br/>
                <Typography className={classes.pos} color="textPrimary">
                    {thirdcontent}
                </Typography>
            </CardContent>
            <CardActions>
            </CardActions>
        </Card>
    );
}