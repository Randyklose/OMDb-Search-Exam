import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import SearchBar from './components/SearchBar';
import Movies from './components/Movies';
import MovieDetails from './components/MovieDetails';

const routes = (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={SearchBar}/>
        <Route path="movie/:title" component={Movies}>
          <Route path="movieDetails" component={MovieDetails} />
        </Route>
      </Route>
    </Router>
);

ReactDOM.render(routes, document.getElementById('root'));
