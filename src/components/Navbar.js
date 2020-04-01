import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import moment from "moment";

const styles = {
    appbar: {
        position: 'absolute',
        background: `rgb(0,0,0,0.2)`,
        alignItems: 'center',
        boxShadow: 'none',
        color:"white",
        height: "75px",
        padding: "4px"
    },

};

const Navbar = () => {
    return (
        <nav>
            <AppBar position="sticky" style={styles.appbar}>
                <Toolbar color="primary"><Typography variant="h4">Weather Watcher</Typography></Toolbar>
            </AppBar>
        </nav>

    );
};

export default Navbar