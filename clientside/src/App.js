import React from 'react';
import HomePage from './screens/HomePage/HomePage';
import BlogPage from './screens/BlogPage/BlogPage';
import CreateBlog from './screens/CreateBlog/CreateBlog';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (    
    <div className="App">
      <Router>
        <Switch>
            <Route path="/home">
              <HomePage />
            </Route>
            <Route path="/blog/:id">
              <BlogPage />
            </Route>
            <Route path="/create">
              <CreateBlog />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
