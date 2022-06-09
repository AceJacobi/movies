import React from 'react';
import PopularMovies from './popular.js';

import Links from './links.js';

class Home extends React.Component {
    constructor(props){
        super(props);
    }
    
        
    render(){
        
        const popMovies = this.props.movies.sort((a,b)=>{
            return b.score - a.score;
        })
        
        var popular = popMovies.slice(0,4);
        
        var p = this.props;
        
        return(
            <div className='home-body'>
            
                <h1 className='head-space'>Movies</h1>

                <hr />

                <PopularMovies {...p} movies={popular} />

                <Links />
    
            </div>
        )
        
        
        
    }
    
}


export default Home;
