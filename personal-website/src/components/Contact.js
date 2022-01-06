import '../styles/Contact.css'
const Contact=()=>{
return(
<div id='ct'>
    <div id='contact-container'>
        <div id='social-media'>
            <h1 className='contact-info'>Social Media </h1>
            <ul >
                 <li className='social-media-list'>
                 <a className='link' href='https://www.linkedin.com/in/fabio-schitini-alves-de-oliveira-4022b4194/?trk=public-profile-join-page' 
                 target="_blank" rel="noopener noreferrer">
                <img id='linkedin' alt='linkedin' src='https://img.flaticon.com/icons/png/512/174/174857.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF'/> 
                <p id='link-text'>https://www.linkedin.com/</p>
            </a>
            </li>
            <li className='social-media-list'>
                 <a className='link' href='https://github.com/fabioschitini' 
                 target="_blank" rel="noopener noreferrer">
                <img id='linkedin' alt='linkedin' src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'/> 
                <p id='link-text'>https://github.com/fabioschitini</p>
            </a>
            </li>
            </ul>
             </div>
       <h1 className='contact-info'>Email</h1>
       <p className='contact-para'>fabioschitini1@hotmail.com</p>
       <h1 className='contact-info'>Phone</h1> 
       <p className='contact-para'> +55 (75)99220-4987 </p>
    </div> 
    </div>
       
    
)
}

export default Contact
