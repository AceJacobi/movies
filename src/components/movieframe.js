import React from 'react';


class MovieFrame extends React.Component{
    constructor(props){
        super(props);
        
        
        this.takeMe = this.takeMe.bind(this);
    }
    
    takeMe(e){
        var there = e.target.id;
    
        var here = window.location.host;


        var nUrl = "/movies/" + there;
        
        
        window.scrollTo(0,0);
        
        this.props.history.push(nUrl);
        
    }
    
    render(){
        
        return (
        <div className='movie-frame-div' onClick={this.takeMe} id={this.props.title}>
            <img className='untouched' src={this.props.img} alt={this.props.title} />
            <p className='untouched'>{this.props.title}</p>       
            <p className='untouched'>{this.props.rating}</p>
            <p className='untouched'>{this.props.score}</p>
        </div>
        )
    }
}
    




export default MovieFrame;