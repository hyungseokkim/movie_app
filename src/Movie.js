import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component{
    render(){
       return(
           <div>
               <MoviePoster/>
                <h1>hello this is movie</h1>
           </div>
           
        )
    }
}

class MoviePoster extends Component{
    render(){
        return(
            <img src="https://www.scholastic.com/content5/media/products/01/9780545422901_mres.jpg"/>
        )
    }

}

export default Movie;