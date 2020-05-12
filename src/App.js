import React from 'react';
import { Route, BrowserRouter as Router, Link, Switch} from "react-router-dom";
import './App.css';
import Posts from './components/posts'
import Post from './components/Post'
import Users from './components/Users'
import User from './components/User'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link style={{textDecoration:'none'}} to="/"><h1>Posts</h1></Link>
          <Link style={{textDecoration:'none'}} to="/users"><h1>Users</h1></Link>
        </header>
        <section className="App-body">
          <Switch>
            <Route exact path="/" component={Posts} />
            <Route exact path="/posts/:postId" component={Post} />
            <Route exact path="/users" component={Users} />
            <Route exact path="/users/:userId" component={User} />
          </Switch>
        </section>
      </div>
    </Router>
  );
}

export default App;
