import '../styles/Header.css'
import {Link} from "react-router-dom"
import {useState} from "react"

const Header=()=>{
    //       <Link to='/projects'> <li className='Header-list'>Projects </li> </Link> 

return(
<div id='Header'>
    <ul id='ul-header' >
        <Link to="/personal-Website"> <li className='Header-list' >About Me</li></Link>  
         <div>
         <li   className='Header-list projects' >Projects↓</li>    
         <Link to="/inventory"> <li   className='Header-list projects' >Inventory Application</li></Link>
         <Link to="/registrar"> <li   className='Header-list projects' >Registrar Clientes</li></Link>  
         </div>
        <Link to="/contact"> <li className='Header-list'> Contact  </li></Link>    
        <a id='CV' href='https://www.scribd.com/document/553485298/My-Resume'
         download='CV.pdf' target="_blank" rel="noopener noreferrer" > CV↓  <li className='Header-list'> 
        </li> </a>
        <a   target="_blank" rel="noopener noreferrer" id='CV' href='https://www.scribd.com/document/565717418/My-Resume-1' > Curriculo↓ </a>

    </ul>
    </div>
)
}

export default Header
