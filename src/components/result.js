import React from 'react';

import Links from './links.js';

class Result extends React.Component{
    constructor(props){
        super(props);        
    }
    
    render(){
                
        var found = this.props.match.params.movie;
        
        var show = this.props.movies.filter((movie)=>(
            movie.title === found
        ));
                
        return(
            <div className='head-space'>     
            
                {show.map((mov)=>{      
            
                    return (
                        
                    <div>
                        
                        <h1>{mov.title}</h1>
                        
                        <hr />
                        
                        <img className='result-img' src={mov.img} alt={mov.title}/>
                        
                        <p>Rating: {mov.rating}</p>
        
                        <p>Score: {mov.score}</p>
        
                        <p>{mov.description}</p>
        
                    </div>
                    )})}
                    
                <hr />

                <Links />
                    
            </div>
        )
    }
    
    
}


export default Result;
