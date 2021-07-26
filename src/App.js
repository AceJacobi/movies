
import React from 'react';
import './App.css';
import {Switch, Route, BrowserRouter} from 'react-router-dom';


import Genre from './components/genre.js';
import Home from './components/home.js';
import Header from './components/header.js';
import Result from './components/result.js';



import Pic1 from './imgs/element.png';
import Pic2 from './imgs/equal.png';
import Pic3 from './imgs/figures.png';
import Pic4 from './imgs/juman.png';
import Pic5 from './imgs/kings.png';
import Pic6 from './imgs/mama.png';
import Pic7 from './imgs/rush.png';
import Pic8 from './imgs/small.png';
import Pic9 from './imgs/spider.png';
import Pic10 from './imgs/star.png'; 

const uMovies = [
    {
        title: 'Fifth Element',
        img: Pic1,
        rating: 'PG-13',
        score: 7.7,
        genre: 'Action',
        description: 'Cab driver finds himself in a search for a legendary weapon.'
    },
    {
        title: 'Equalizer',
        img: Pic2,
        rating: 'R',
        score: 7.2,
        genre: 'Action',
        description: 'Man sworn from violence finds himself fighting to save a young girl.'
    },
    {
        title: 'Hidden Figures',
        img: Pic3,
        rating: 2016,
        score: 7.9,
        genre: 'Drama',
        description: 'Female mathmaticians serve a vital role at NASA in the Space Programs.'
    },
    {
        title: 'Jumanji: The Next Level',
        img: Pic4,
        rating: 'PG-13',
        score: 6.6,
        genre: 'Comedy',
        description: 'The gang of players return to Jumanji once more to save one of their own.'
    },
    {
        title: 'Kingsmen: The Secret Service',
        img: Pic5,
        rating: 'R',
        score: 7.7,
        genre: 'Action',
        description: 'Spy organization recruits a young male into their training program.'
    },
    {
        title: "Big Momma's House",
        img: Pic6,
        rating: "PG-13",
        score: 5.2,
        genre: 'Comedy',
        description: 'Male FBI agent disguises himself as a grandmother to protect a woman and her son.'
    },
    {
        title: 'Rush Hour 2',
        img: Pic7,
        rating: 'PG-13',
        score: 6.6,
        genre: 'Comedy',
        description: 'On a vacation, Carter and Lee find themselves once again in the middle of a scheme.'
    },
    {
        title: 'Small Soldiers',
        img: Pic8,
        rating: "PG-13",
        score: 6.2,
        genre: 'Scifi',
        description: 'Toy action figures rise up against humankind.'
    },
    {
        title: 'Spider-Man: Into the Spider-Verse',
        img: Pic9,
        rating: "PG",
        score: 8.4,
        genre: 'Scifi',
        description: 'Teen Miles Morales becomes the new Spider-Man of his universe.'
    },
    {
        title: 'Star Wars Episode V',
        img: Pic10,
        rating: "PG",
        score: 8.6,
        genre: 'Scifi',
        description: 'After a defeat at planet Hoth, Luke begins training while the Rebels go on the run from the Empire.'
    }
];

const movies = uMovies.sort((a,b)=>{
    return a.title > b.title;
})


class App extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            movies: movies
        }
    }
    
    render(){
        return (
            <div className="App">
              <BrowserRouter>
                <Header movies={this.state.movies} />
                <Switch>
                    <Route path='/comedy' component={(props)=>(<Genre {...props} movies={this.state.movies} head={'Comedy'} /> )} />
                    <Route path='/action' component={(props)=>(<Genre {...props} movies={this.state.movies} head={'Action'} /> )} />
                    <Route path='/scifi' component={(props)=>(<Genre {...props} movies={this.state.movies} head={'Scifi'} /> )} />
                    <Route path='/drama' component={(props)=>(<Genre {...props} movies={this.state.movies} head={'Drama'} /> )} />
                    <Route path='/allmovies' component={(props)=>(<Genre {...props} movies={this.state.movies} head={'All Movies'} /> )} />
                    <Route path='/movies/:movie' component={(props)=>(<Result movies={this.state.movies} {...props}/> )} />         
                    <Route path='/' component={(props)=>(<Home {...props} movies={this.state.movies}/>)} />
                </Switch>
              </BrowserRouter>
            </div>
        );
    }
}

export default App;
