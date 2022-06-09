import React from 'react';

import MovieFrame from './movieframe.js';
import Helper from '../helper.js';

var helper = new Helper();


class PopularMovies extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
                    
        return(
            
        <div className='pop-body'>
            
            <h2 id='pop-header'>Popular</h2>
            
            <div className='popular-movies'>
            
                {this.props.movies.map((movie)=>{
            
                    var p = this.props;
            
                    return(
                        <MovieFrame 
                        {...p}
                        key={helper.idKey()}
                        img={movie.img} 
                        title={movie.title} 
                        rating={movie.rating} 
                        score={movie.score} 
                    />)
                })}
            </div>
            
        </div>
        )
    }
        
}   



export default PopularMovies;
