import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import '../App.css'
const axios = require('axios');



class Posts extends Component {
    state = {
        postsData:[]
    }
    componentDidMount(){
        axios({
            method: 'get',
            url: `https://jsonplaceholder.typicode.com/posts`
          })
            .then(response=> {
                this.setState({postsData:response.data})
            })
            .catch(error=>{
                console.log(error)
            })
    }
    detailedPostView = (postId) =>{
        this.props.history.push(`/posts/${postId}`)
    }
    render() {
        return (
            <React.Fragment>
                <div className="post-container">
                    <h1>All Posts</h1>
                    <Grid container spacing={3}>
                        {this.state.postsData.map(post=>{
                            return <Grid key={post.id} item xs={4}>
                                <Paper className="post-card" style={{backgroundColor:'#fafafa'}} onClick={()=>this.detailedPostView(post.id)}>
                                    <div className="post-card-title"><h2>{post.title}</h2></div>
                                    <p>{post.body}</p>
                                </Paper>
                            </Grid>
                        })}
                    </Grid>
              </div>
          </React.Fragment>
         );
    }
}
 
export default Posts;