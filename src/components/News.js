import Paper from "@material-ui/core/Paper";
import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import SendIcon from '@material-ui/icons/Send';
import ListItemText from "@material-ui/core/ListItemText";
import axios from "axios";

class Newspaper extends React.Component {
    state={
        articles:[],
    };

    componentDidMount() {
        axios.get("http://newsapi.org/v2/top-headlines?country=gb&category=sport&apiKey=8bf6127cd4154169a48b8c53881fd189")
            .then(response=>{
                // console.log("AXIOS ", response);
                this.setState({
                    articles: response.data.articles
                })
            })
            .catch(err=>{console.log(err)});
    }

    render() {
        const articles = this.state.articles ? this.state.articles.map(article=>{
            return (<ListItem><ListItemIcon><SendIcon/></ListItemIcon><ListItemText>{article.title}<p style={{marginTop:"2px"}}><a href={article.url}>{article.source.name}</a></p></ListItemText></ListItem>)
        }) : (<p>No articles</p>);
        return(
            <Paper style={this.props.styles}>
                <List>
                    <ListSubheader>Latest headlines</ListSubheader>
                    {articles}
                </List>
            </Paper>
        );
    }
    }

export default Newspaper;

