import React from 'react';
import {Link} from 'react-router-dom';

import Mag from '../imgs/magnifyer.png';


class Search extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            showForm: false,
            query: '',
            searchMov: []
        }
        
        this.showOpenForm = this.showOpenForm.bind(this);
        this.closeForm = this.closeForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    
    showOpenForm(){
        this.setState({
            showForm: true
        })
    }
    
    closeForm(){
        this.setState({
            showForm: false
        })
        
        window.scrollTo(0,0);
    }
    
    handleChange(e){
        this.setState({
            query: e.target.value
        })
    }
    
    
    handleSubmit(e){
        e.preventDefault();
        
        var found = this.props.movies.filter((movie)=>{
            return movie.title.toUpperCase().includes(this.state.query.toUpperCase());
        })
        
        if(found.length > 0){
            this.setState({
                searchMov: found
            })
        }
        else {
            this.setState({
                searchMov: [{title: 'No Item Found'}]
            })
        }
        
    }
    
    render(){
            
        if(!this.state.showForm){
            return (
            <div className='mag-div' onClick={this.showOpenForm}>
                <img src={Mag} alt='Search' />
            </div>
            )
        }
        else {
                        
            return(
            <div className='search-body'>
                <div className='search-input'>
                    <input type='text' onChange={this.handleChange} placeholder='Movie Title'  maxLength={35} />
                    <button id='close-searchB' onClick={this.handleSubmit}>GO</button>
                    <button id='close-searchB' onClick={this.closeForm}>X</button>
                </div>
                <br />
                <div className='search-results-div'>
                    <h3>Results</h3>
                   {this.state.searchMov.map((movie)=>{
                if(movie.title !== 'No Item Found'){
                    var links = `/movies/${movie.title}`;
                        return (
                            <Link onClick={this.closeForm} to={links}>{movie.title}</Link>
                            )}
                else {
                    return (
                    <h3>No Results Found</h3>
                    )
                }
            })}
                </div>
            </div>
            )
        }
    }
}


export default Search;