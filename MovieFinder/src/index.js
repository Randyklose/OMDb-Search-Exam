import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route, browserHistory } from 'react-router';
import Movies from './components/Movies';
import MovieDetails from './components/MovieDetails';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
injectTapEventPlugin();

const routes = (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="movie/:title" component={Movies}>
          <Route path="movieDetails" component={MovieDetails} />
        </Route>
      </Route>
    </Router>
);

ReactDOM.render(routes, document.getElementById('root'));
