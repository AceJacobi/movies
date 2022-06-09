import React from 'react';


import MovieFrame from './movieframe.js';
import Links from './links.js';
import PopularMovies from './popular.js';
import Helper from '../helper.js';
import Topper from './topper.js';

var helper = new Helper();


class Genre extends React.Component{
    constructor(props){
        super(props);
    }
    
    
    
    render(){
        
        var specificFilms = this.props.movies.filter((movie)=>{
            
            if(this.props.head === movie.genre){
                return movie;
            }
            
            else if(this.props.head === 'All Movies'){
                return movie;
            }
            
        })
        
        var header = this.props.head === 'Scifi' ? 'Sci-Fi' : this.props.head;
        
        if(this.props.head === 'All Movies'){
            
            const popMovies = this.props.movies.sort((a,b)=>{
                return b.score - a.score;
            })
        
            var popular = popMovies.slice(0,3);
            
            var alphaBet = this.props.movies;
            
            var alpha = alphaBet.sort((a,b)=>{
                
                if(a.title[0] < b.title[0]){
                    return -1;
                }
                
                else if(a.title[0] == b.title[0]){
                    
                    if(a.title[1] < b.title[1]){
                        return -1
                    }
                    
                    else if(a.title[1] > b.title[1]){
                        return 1;
                    }
                    
                    return 0;
                }
                
                else {
                    return 1;
                }
            });
            
            var p = this.props;
            
            return (
            <div className='genre-div'>
                
                <h1 className='head-space'>{header}</h1>
        
                <Topper />
                
                <hr />
                
                <PopularMovies {...p} movies={popular} />
                    
                <hr />
                
                {alpha.map((movie)=>{
                    
                    var p = this.props;
                    
                        return (
                            <div>
                            
                            <MovieFrame 
                                {...p}
                                key={helper.idKey()}
                                img={movie.img}
                                title={movie.title}
                                rating={movie.rating}
                                score={movie.score}
                            />
    
                            <hr />
    
                        </div>)
            })}
    
                <Links />
            
            </div>
        )
            
            
        }
        else {
                    
        return (
                <div className='genre-div'>
            
                    <h1 className='head-space'>{header}</h1>
    
                    <hr />
            
                    {specificFilms.map((movie)=>{
                        var p = this.props;
                        
                        return(
                            <div>
                            
                            <MovieFrame 
                                {...p}
                                key={helper.idKey()}
                                img={movie.img}
                                title={movie.title}
                                rating={movie.rating}
                                score={movie.score}
                            />
                                    
                            <hr />
                                    
                        </div>
                        )})}

                    <Links />

                </div>
            )
        
        }
    }
    
    
    
    
}


export default Genre;
