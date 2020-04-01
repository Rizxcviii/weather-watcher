import React from 'react';
import './App.css';
import Grid from "@material-ui/core/Grid";
import Info from "./components/Info";

class App extends React.Component {
    state={
        userpos: "",
    };
    styles= {
        app : {
            backgroundColor:'#D0D0D0',
            // backgroundImage: `url(minimalizm-gradient-background.jpg)`,
            minHeight: "100%"
        },
    };

  componentDidMount() {
      navigator.geolocation.getCurrentPosition(position => {
          // console.log(position.coords);
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
