import '../styles/Contact.css'
const Contact=()=>{
return(
<div id='ct'>
    <div id='contact-container'>
        <div id='social-media'>
            <h1 className='contact-info'>Social Media </h1>
            <ul >
                 <li className='social-media-list'>
                 <a className='link' href='https://www.linkedin.com/'>
                <img id='linkedin' alt='linkedin' src='https://img.flaticon.com/icons/png/512/174/174857.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF'/> 
                <p id='link-text'>https://www.linkedin.com/</p>
            </a>
            </li>
            </ul>
             </div>
       <h1 className='contact-info'>Email</h1>
       <p className='contact-para'>fabioschitini1@hotmail.com</p>
       <h1 className='contact-info'>Phone</h1> 
       <p className='contact-para'> 041 (75)99220-4987 </p>
     

       
    </div>
    <img id='contact-image' alt='coll' src='https://image.freepik.com/free-vector/vector-illustration-super-professional-programmer-project-manager-funny-cartoon-character_122058-445.jpg'/>
    </div>
)
}

export default Contact