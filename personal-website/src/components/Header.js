import '../styles/Header.css'
import {Link} from "react-router-dom"

const Header=()=>{
return(
<div id='Header'>
    <h1>Yo!</h1>
    <ul id='ul-header' >
        <Link to="/personal-Website"> <li className='Header-list' >About Me</li></Link> 
      
       <Link to='/projects'> <li className='Header-list'>Projects </li> </Link> 

        <Link to="/contact"> <li className='Header-list'> Contact  </li></Link>    
        <a id='CV' href='https://firebasestorage.googleapis.com/v0/b/learning-firebase-b9b2a.appspot.com/o/Web%20Developer%20Resume.pdf?alt=media&token=d1657668-075c-4b66-af78-59a06cf64814'
         download='CV.pdf' target="_blank" rel="noopener noreferrer" > CV↓  <li className='Header-list'> 

        </li> </a>
        
    </ul>
    </div>
)
}

export default Header