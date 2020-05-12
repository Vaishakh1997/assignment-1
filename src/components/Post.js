import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import '../App.css'
const axios = require('axios');



class Post extends Component {
    state = {
        postData:[],
        commentsData:[]
    }
    componentDidMount(){
        axios({
            method: 'get',
            url: `https://jsonplaceholder.typicode.com/posts/${this.props.match.params.postId}`
          })
            .then(response=> {
                this.setState({postData:response.data})
            })
            .catch(error=>{
                console.log(error)
            })

            axios({
                method: 'get',
                url: `https://jsonplaceholder.typicode.com/comments`
              })
                .then(response=> {
                    let commentsData= []
                    commentsData = response.data.filter(comment=>{
                        return parseInt(this.props.match.params.postId) === comment.postId
                    })
                    this.setState({commentsData:commentsData})
                })
                .catch(error=>{
                    console.log(error)
                })
    }
    render() {
        return (
            <React.Fragment>
                <div className="post-container">
                    <h1>Detailed Post view</h1>
                    <Grid container spacing={3}>
                           <Grid key={this.state.postData.id} item xs={12}>
                                <Paper className="detailed-post-card" style={{backgroundColor:'#fafafa'}}>
                                    <h2>{this.state.postData.title}</h2>
                                    <p>{this.state.postData.body}</p>
                                </Paper>
                            </Grid>
                            <div className="comments-window">
                                <h2>Comments:</h2>
                                {this.state.commentsData.map(comment=>{
                                    return <Grid key={comment.id} item xs={12} style={{paddingBottom:'2vw'}}>
                                    <Paper className="detailed-comment-card" >
                                        <h5>{comment.name}</h5>
                                        <p>{comment.body}</p>
                                    </Paper>
                                </Grid>
                                })}
                            </div>
                    </Grid>
              </div>
          </React.Fragment>
         );
    }
}
 
export default Post;