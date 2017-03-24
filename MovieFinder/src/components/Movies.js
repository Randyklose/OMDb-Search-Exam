import React from 'react';
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
    console.log(data.Search)
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
    if (!this.state.data) {
    return (<div className="user-page">LOADING...</div>);
}
    return (
      <div >
        <h4>{this.props.params.title.toUpperCase()}</h4>
        <ul className="user-info__stats">
          {this.state.data.map((data, i) => <li key={i} className="titles">{data.Title}</li>)}
        </ul>
      </div>
    )
  }
}

export default Movies;
