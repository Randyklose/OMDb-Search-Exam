import React from 'react';
import Loading from './Loading';
import { Link } from 'react-router';
import { Paper } from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
var API_HOST = 'http://www.omdbapi.com/';

class Movies extends React.Component {
  constructor() {
    super();
    this.state = {}
  }

  fetchData() {
  fetch(`${API_HOST}?s=${this.props.params.title}`)
  .then(response => response.json())
  .then(data => {
    this.setState({data: data.Search})
  })
}

componentDidMount(){
this.fetchData()
}

componentDidUpdate(prevProps, prevState){
if(prevProps.params.title !== this.props.params.title){
  this.fetchData()
  }
}

  render() {
    const { data } = this.state;
    const style = {
      'backgroundColor': '#455A64',
};
    if (!data) {
    return (
    <div className="loading-container">
      <Loading />
    </div>);
}
    return (
      <div>
        <div className="list">
          <ul className="movie-info__titles">
            {data.map((data, i) =>
              <MuiThemeProvider key={i} muiTheme={getMuiTheme(lightBaseTheme)}>
                <li key={i} className="titles">
                  <Link to={`movie/${data.Title}/movieDetails`}>
                    <Paper
                      key={i}
                      zDepth={5}
                      style={style}
                      className="title-display" >
                      <p>{data.Title}</p>
                    </Paper>
                  </Link>
                </li>
              </MuiThemeProvider>
            )}
          </ul>
        </div>
        {this.props.children}
      </div>
            )
    }
}

export default Movies;
