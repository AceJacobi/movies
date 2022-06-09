import {Link} from 'react-router-dom';

import Logo from '../imgs/movieslogo.png';
import Search from './search.js';

function Header(props){
    return(
        
    <div className='header-div'>
        
        <Link onClick={()=>(window.scrollTo(0,0))} to='/'><img id='logo-pic' src={Logo} alt='Home'/></Link>
        
        <Search movies={props.movies} />
            
    </div>
    )
}

export default Header;
