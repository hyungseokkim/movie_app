import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

/*const movieTitles = [
  "Matrix",
  "full Metal Jacket",
  "Oldboy",
  "Star Wars"
];


const movieImages = [
  "https://images-na.ssl-images-amazon.com/images/I/51EG732BV3L._SY445_.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/41MN0ANVJTL.jpg",
  "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg",
  "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
];*/

const movies = [
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
}
];

class App extends Component {

  // Rendor : componentWillMount() -> render() -> componentDidMount()

  // Update componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidMount()

  render() {
    return (
      <div className="App">
        {movies.map((movie, index) =>{
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })}
      </div>
    );
  }
}

export default App;
