import React from 'react';

function toTop(){
    window.scrollTo(0,0);
}


class Topper extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            show: false
        }
        
        this.scroller = this.scroller.bind(this);
        
    }
    
    
    componentDidMount(){
        setInterval(this.scroller, 3000);
    }
    
    componentWillUnmount(){
        clearInterval(this.scroller);
    }
    
    
    scroller(){
        var w = window.scrollY;
        
        if(w > 0){
            this.setState({
                show: true
            })
        }
        
        else {
            this.setState({
                show: false
            })
        }
    }
    
    render(){
    
        if(this.state.show){
            
            return (
                <div className='totop-div' onClick={toTop}>
                
                    <p>Top</p>
        
                </div>
            )
        }
        else {
            return null;
        }
    }
}



export default Topper;
