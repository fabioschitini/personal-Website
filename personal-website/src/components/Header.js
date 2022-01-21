import '../styles/Header.css'
import {Link} from "react-router-dom"

const Header=()=>{
    //       <Link to='/projects'> <li className='Header-list'>Projects </li> </Link> 

return(
<div id='Header'>
    <ul id='ul-header' >
        <Link to="/personal-Website"> <li className='Header-list' >About Me</li></Link> 
      

        <Link to="/contact"> <li className='Header-list'> Contact  </li></Link>    
        <a id='CV' href='https://www.scribd.com/document/553485298/My-Resume'
         download='CV.pdf' target="_blank" rel="noopener noreferrer" > CV↓  <li className='Header-list'> 
        </li> </a>
        <a   target="_blank" rel="noopener noreferrer" id='CV' href='https://www.scribd.com/document/553485615/Web-Developer-Resume-3' > Curriculo↓ </a>
        
    </ul>
    </div>
)
}

export default Header
