import {Link} from 'react-router-dom';

function Links(){
    
    return (
        <div className='links-body'>
        
            <h2>Categories</h2> 

            <div className='link-div'>

                <div>
        
                  <p><Link onClick={()=>(window.scrollTo(0,0) )} to='/action'>Action</Link></p>
        
                  <p><Link onClick={()=>(window.scrollTo(0,0) )} to='/drama'>Drama</Link></p>
                      
                </div>

                <div>
                      
                  <p><Link onClick={()=>(window.scrollTo(0,0) )} to='/scifi'>Sci-Fi</Link></p>
                      
                  <p><Link onClick={()=>(window.scrollTo(0,0) )} to='/comedy'>Comedy</Link></p>
                      
                </div>            

                </div>

            <Link onClick={()=>(window.scrollTo(0,0) )} to='/allmovies'>All Movies</Link>

        </div>
    )
}

export default Links;
