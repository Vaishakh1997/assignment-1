import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import '../App.css'
const axios = require('axios');



class Users extends Component {
    state = {
        usersData:[]
    }
    componentDidMount(){
        axios({
            method: 'get',
            url: `https://jsonplaceholder.typicode.com/users`
          })
            .then(response=> {
                this.setState({usersData:response.data})
            })
            .catch(error=>{
                console.log(error)
            })
    }
    detailedUserView = (userId) =>{
        console.log(userId)
        this.props.history.push(`/users/${userId}`)
    }
    render() {
        return (
            <React.Fragment>
                <div className="post-container">
                    <h1>All User List</h1>
                        {this.state.usersData.map((user, index) => {
                            return(
                            <List key={user.id} component="nav" className="users-list" aria-label="contacts">
                                <h3>{index+1}.   </h3>
                                <ListItem button >
                                    <ListItemText primary={user.name} onClick={()=>this.detailedUserView(user.id)} />
                                </ListItem>
                            </List>
                        )})}
              </div>
          </React.Fragment>
         );
    }
}
 
export default Users;