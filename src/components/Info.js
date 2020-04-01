import React from "react";
import Navbar from "./Navbar";
import Grid from "@material-ui/core/Grid";
import Activitypaper from "./Activitypaper";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import axios from "axios";
import Infocard from "./Infopaper";
import Detailspaper from "./Detailspaper";
import Newspaper from "./News";
import moment from "moment";
import Hidden from "@material-ui/core/Hidden";
import Getactivity from "./Getactivity";
import Getbacktheme from "./Getbacktheme";

class Info extends React.Component {
    state={
        userpos: this.props.userpos || "nope",
        place: 'The void',
        type: 'idk',
        desc: 'you tell me',
        currenttemp: '0°C',
        humidity: '0%',
        // articles: [],
        backtheme: 'https://wallpaperaccess.com/full/134843.jpg',
        activity:'',
        activityimg:'https://ichef.bbci.co.uk/news/640/cpsprodpb/43DC/production/_87827371_photocompetition.jpg',
        activityshort: '',
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.userpos !== prevProps.userpos){
            this.setState({
                userpos: this.props.userpos
            });

            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.props.userpos.latitude}&lon=${this.props.userpos.longitude}&appid=850847c1d240424638584f0638faf124`)
                .then(weather=>{
                    if(weather){
                        // console.log(weather, " FOUND");
                        const weatherinfo = weather.data;
                        this.setState({
                            place: weatherinfo.name,
                            type: weatherinfo.weather[0].main,
                            desc: weatherinfo.weather[0].description,
                            currenttemp: String(Math.round((parseInt(weatherinfo.main.temp) - 273.12)*10)/10)+'°C',
                            humidity: 'Humidity: '+weatherinfo.main.humidity+'%',
                        });
                        const suggestedactivity = Getactivity(weatherinfo.weather[0].main, Math.round((parseInt(weatherinfo.main.temp) - 273.12)*10)/10)();
                        // const suggestedactivity = Getactivity('Sun', 19); //TESTING
                        // console.log(suggestedactivity)
                        this.setState({
                            activity: suggestedactivity.activity,
                            activityimg: suggestedactivity.image,
                            activityshort: suggestedactivity.short,
                        });
                        document.getElementsByClassName('MuiGrid-root MuiGrid-container MuiGrid-justify-xs-center')[0].style.backgroundImage = `url("${Getbacktheme(weatherinfo.weather[0].main).backtheme}")`;
                    }
                })
                .catch(err=>{console.log(err)})
        }
    }

    showMap(activity){
        // console.log(activity)
        window.open(`https://www.google.com/maps/search/?api=1&query=${activity}`);
    }

    render() {
        // console.log("ALL ,",this.state.articles)
        const styles = {
            wrapper: {
                height:"100%",
                width:"80%",
                margin:"auto",
                // backgroundImage: `url(${Getbacktheme(this.state.type)})`
            },
            paper: {
                minHeight: "220px",
                margin: "12px",
                opacity: "0.7",
                padding: "10px"
            },
            newspaper: {
                height: "232px",
                margin: "12px",
                opacity: "0.7",
                padding: "4px",
                smDown:"none",
                overflow:"auto",
                marginTop:"12px",
            },
            sportimage: {
                height: "240px",
                margin: "12px",
                backgroundColor: "transparent"
            },
            toolbar: {
                height:"80px",
                backgroundColor: "white",
                justifyContent: 'center',
                boxShadow: 'none',
                opacity: "0.7",
                // color: "white",
            },
        };

        return (
            <div style={styles.wrapper}>
                <Navbar/>
                <br/>
                <Grid container direction="row" wrap="wrap" style={{marginTop: '50px'}}>
                    <Grid item lg="4" md="4" sm="4" xs="6">
                        <Infocard content={this.state.type} secondcontent={this.state.desc}/>
                    </Grid>
                    <Hidden xsDown>
                    <Grid item xs="5">
                            <Newspaper styles={styles.newspaper}/>
                    </Grid>
                    </Hidden>
                    <Grid item xl="3" lg="3" md="3" sm="3" xs="6">
                        <Detailspaper content={this.state.place+", "+moment().format('LT')} secondcontent={this.state.currenttemp} thirdcontent={this.state.humidity}/>
                    </Grid>
                    <Grid item xs="7"><Activitypaper activity={this.state.activity} styles={styles.paper}/></Grid>
                    <Grid item xs="5">
                        <Card style={styles.sportimage} elevation={0}>
                            <CardActionArea>
                            <CardMedia
                                onClick={()=>{this.showMap(this.state.activityshort)}}
                                component="img"
                                alt="Suggested activity image"
                                image={this.state.activityimg}
                                title="Suggested activity"
                            />
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Info

