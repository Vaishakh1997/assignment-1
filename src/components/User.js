import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import '../App.css'
const axios = require('axios');



class User extends Component {
    state = {
        userData:[],
        userId:this.props.match.params.userId
    }
    componentDidMount(){
        axios({
            method: 'get',
            url: `https://jsonplaceholder.typicode.com/users`
          })
            .then(response=> {
                let userData=[]
                userData = response.data.filter(user=>{
                    return user.id === parseInt(this.props.match.params.userId)
                })
                this.setState({userData:userData})
            })
            .catch(error=>{
                console.log(error)
            })
    }
 
    render() {
        return (
            <React.Fragment>
                <div className="post-container">
                <h1>User Details</h1>
                {this.state.userData.map(user=>{
                    return(
                        <div key={user.id} className="user-details">
                            <p><b>Name: </b>{user.name}</p>
                            <p><b>User name: </b>{user.username}</p>
                            <p><b>E-mail: </b>{user.email}</p>
                            <p><b>Address: </b>{user.address.street} {user.address.suite}  {user.address.city} <b> Zip code: </b>{user.address.zipcode}</p>
                            <p><b>Phone: </b>{user.phone}</p>
                            <p><b>Website: </b>{user.website}</p>
                            <p><b>Company Name: </b>{user.company.name}</p>
                        </div>
                    )
                })}
              </div>
          </React.Fragment>
         );
    }
}
 
export default User;