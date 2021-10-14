import '../styles/Header.css'
import {Link} from "react-router-dom"

const Header=()=>{
return(

    <ul id='Header' >
        <Link to="/personal-Website"> <li className='Header-list' >About Me</li></Link> 
      
       <Link to='/projects'> <li className='Header-list'>Projects </li> </Link> 

        <Link to="/contact"> <li className='Header-list'> Contact  </li></Link>    
        
    </ul>

)
}

export default Header