import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import React from "react";


class Activitypaper extends React.Component{
    state={
        activity: 'Oops, I have no idea about this weather. Maybe try again later!',
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.activity !== prevProps.activity){
            this.setState({
                activity: this.props.activity
            })
            }
    }

    render() {
        // console.log(this.state.activity)
        return(
            <Paper style={this.props.styles}>
                <Grid container direction="row" justify="center" alignContent="center" style={{height:"100%"}}>
                    <Grid item><h1 style={{wordBreak:'break-word'}}>{this.state.activity}</h1></Grid>
                </Grid>
            </Paper>
        )
    }

};

export default Activitypaper;

