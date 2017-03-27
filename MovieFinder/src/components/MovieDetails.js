import React from 'react';
import Loading from './Loading';
import {Paper} from 'material-ui';
var API_HOST = 'http://www.omdbapi.com/';

class MovieDetails extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    fetchData() {
        fetch(`${API_HOST}?t=${this.props.params.title}`)
        .then(response => response.json())
        .then(data => {
            this.setState({data: data})
        })
    }

    componentDidMount() {
        this.fetchData()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.params.title !== this.props.params.title) {
            this.fetchData()
        }
    }

    render() {
        const {data} = this.state;
        const style = {
            'backgroundColor': '#455A64'
        };
        if (!data) {
            return (
                <div className="loading-container">
                    <Loading/>
                </div>
            );
        }
        return (
            <div className="details-page">
              <div className="details-head">
                <Paper zDepth={5} style={style} className="details-display">
                  <h4>{data.Title}
                    ({data.Year})</h4>
                  <p>{data.Rated} | {data.Runtime} | {data.Genre} | {data.Released}</p>
                </Paper>
              </div>
              <Paper zDepth={5} style={style} className="poster-display">
                <img src={data.Poster} alt='_blank'/>
                <div>
                  <p id="plot">{data.Plot}</p>
                  <p>
                    <span className='headline'>Directed By: </span>
                    {data.Director}
                  </p>
                  <p>
                    <span className='headline'>Cast: </span>
                    {data.Actors}
                  </p>
                </div>
                </Paper>
            </div>
        )
    }
}

export default MovieDetails;
