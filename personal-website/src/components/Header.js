import '../styles/Header.css'
import {Link} from "react-router-dom"

const Header=()=>{
return(
<div id='Header'>
    <ul id='ul-header' >
        <Link to="/personal-Website"> <li className='Header-list' >About Me</li></Link> 
      
       <Link to='/projects'> <li className='Header-list'>Projects </li> </Link> 

        <Link to="/contact"> <li className='Header-list'> Contact  </li></Link>    
        <a id='CV' href='https://www.scribd.com/document/551437771/Web-Developer-Resume'
         download='CV.pdf' target="_blank" rel="noopener noreferrer" > CV↓  <li className='Header-list'> 
        </li> </a>
        <a id='CV' href='https://www.scribd.com/document/551437771/Web-Developer-Resume' > Curriculo↓ </a>
        
    </ul>
    </div>
)
}

export default Header
