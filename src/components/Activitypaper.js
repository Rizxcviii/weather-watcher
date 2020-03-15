import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import React from "react";


class Activitypaper extends React.Component{
    state={
        activity: '',
    };

    // getActivity(weathertype, currenttemp){
    //     if (weathertype === 'Clouds') {
    //         if (currenttemp >= -10 && currenttemp <= 4){
    //             return "Cloud drawing"
    //         }
    //         else if (currenttemp >= 5 && currenttemp <= 12 ){
    //             return "idk"
    //         }
    //         else if (currenttemp > 13){
    //             return "return"
    //         }
    //         else{
    //             return "else hahahah"
    //         }
    //     }
    //     else if(weathertype === 'Sun'){
    //         if (currenttemp >= -10 && currenttemp <= 4){
    //             return "Football"
    //         }
    //         else if (currenttemp >= 5 && currenttemp <= 12 ){
    //             return "Basketball"
    //         }
    //         else if (currenttemp > 13){
    //             return "Beach day"
    //         }
    //         else{
    //
    //         }
    //     }
    //     else if(weathertype === 'Rain'){
    //         if (currenttemp <= 4){
    //             return "Netflix"
    //         }
    //         else if (currenttemp >= 5 && currenttemp <= 12 ){
    //             return "Anime bingewatching"
    //         }
    //         else if (currenttemp >= 13){
    //             return "Sleeping"
    //         }
    //         else{
    //             return "Procastinating"
    //         }
    //     }
    //     else {
    //             return "I DON'T KNOW"
    //     }
    // };

    // componentDidMount() {
    //     this.setState({
    //
    //     })
    // }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.activity !== prevProps.activity){
            this.setState({
                activity: this.props.activity
            })
            }
    }

    render() {
        return(
            <Paper style={this.props.styles}>
                <Grid container direction="row" justify="center" alignContent="center" style={{height:"100%"}}>
                    <Grid item><h1>How about {this.state.activity} today? </h1></Grid>
                </Grid>
            </Paper>
        )
    }

};

export default Activitypaper;

