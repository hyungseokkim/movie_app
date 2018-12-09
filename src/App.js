import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';
class App extends Component {

  // Rendor : componentWillMount() -> render() -> componentDidMount()
  // Update componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidMount()

  state = {
    greeting : 'Hello'
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        movies: [
          {
            title : "Matrix"
            ,poster :  "https://images-na.ssl-images-amazon.com/images/I/51EG732BV3L._SY445_.jpg"
          },{
            title :"full Metal Jacket"
            ,poster :"https://images-na.ssl-images-amazon.com/images/I/41MN0ANVJTL.jpg"
          },{
            title : "Oldboy"
            ,poster :"https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg"
          },{
            title : "Star Wars"
            ,poster :  "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
          },
          {
            title: "Transpotting",
            poster: "https://m.media-amazon.com/images/M/MV5BMzA5Zjc3ZTMtMmU5YS00YTMwLWI4MWUtYTU0YTVmNjVmODZhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"
          }
        ]
      })
    }, 5000)
  }


  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) =>{
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })
    return movies
  } 

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
