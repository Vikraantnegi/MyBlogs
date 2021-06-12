import React from 'react';
import HomePage from './screens/HomePage/HomePage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/blog">
            <BlogPage />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
