import React from 'react';
import './App.css';
import Grid from "@material-ui/core/Grid";
import Navbar from "./components/Navbar";
import Info from "./components/Info";
import axios from 'axios';

class App extends React.Component {
    state={
        userpos: "",
        // backtheme: 'https://www.xmple.com/wallpaper/blue-yellow-gradient-linear-1920x1080-c2-ffffe0-00bfff-a-45-f-14.svg',
        // backtheme: 'https://i.pinimg.com/originals/6d/df/89/6ddf89a95cc31286387b11c64c1991a8.jpg',
        backtheme1: 'https://thewallpaper.co//wp-content/uploads/2017/07/cities-nature-download-pictures-lovely-castles-spring-kingdom-shrubs-free-grass-1080p-hdr-daffodils-united-castle-drumlanrig-amazing-2048x1300.jpg',
    };
    styles= {
        app : {
            // backgroundImage: `url(${this.state.backtheme})`,
            minHeight: "100%"
        },
    };

    // getCurrentWeather(){
    //     navigator.geolocation.getCurrentPosition(position => {
    //         console.log(position.coords);
    //         axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=850847c1d240424638584f0638faf124`)
    //             .then(response=>{
    //                 if(response){
    //                     console.log(response.data);
    //                     return response
    //                 }
    //             })
    //             .catch(err=>{console.log(err)})
    //     });
    // }

  componentDidMount() {
      navigator.geolocation.getCurrentPosition(position => {
          console.log(position.coords);
          this.setState({
              userpos: position.coords
          })
      });
  }

    render() {
    return (
        <div className="App" style={this.styles.app}>
          <Grid container direction="row" justify="center" style={this.styles.app}>
              <Grid item style={{width:"100%", minHeight: "100%", marginTop:"20px"}}>
                  <Info userpos={this.state.userpos}/>
              </Grid>
          </Grid>
        </div>
    );
  }
  }

export default App;
