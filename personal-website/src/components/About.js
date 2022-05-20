import '../styles/About.css'
const About=()=>{
return(
<div id='container'>

<h1>Fabio Schitini</h1>

    <div id='container-about'>
        <div id='main-info'>

        
    
       <h2 >About me</h2>
       <p>
  I am a JavaScript developer, using React to create
         frontEnd functionality and Node.Js,Express,MongoDb to create an API on the backend.
        I have done  several projects on <a href='https://www.theodinproject.com' target="_blank" rel="noopener noreferrer">The odin project</a>,
        where I learned most of my current skils. I have created a fair bit of projects using the tecnologies mentioned above,as
        you can see some of it are on this website, but most are on <a href='https://github.com/fabioschitini' target="_blank" rel="noopener noreferrer">my github account</a>.
        I am always learning, and I am looking  towards my career as a Web Developer
           
             </p>
       <h2>Tecnologies </h2>
       <ul id='tech-list'>
          <li>JS</li>
          <li>HTML</li>
          <li>CSS</li> 
          <li>React</li>
          <li>Node</li>
          <li>MongoDb</li>

       </ul>

       <div id='contact-container'>
        <div id='social-media'>
            <h1 className='contact-info'>Social Media </h1>
            <ul >
                 <li className='social-media-list'>
                 <a className='link' href='https://www.linkedin.com/in/fabio-schitini-alves-de-oliveira-4022b4194/?trk=public-profile-join-page' 
                 target="_blank" rel="noopener noreferrer">
                <img id='linkedin' alt='linkedin' src='https://expertdigital.net/wp-content/uploads/2018/11/linkedin-logo.png'/> 
            </a>
            </li>
            <li className='social-media-list'>
                 <a className='link' href='https://github.com/fabioschitini' 
                 target="_blank" rel="noopener noreferrer">
                <img id='linkedin' alt='linkedin' src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'/> 
            </a>
            </li>
            </ul>
             </div>
             </div>

       <h2 >Courses</h2>
       <p><a href='https://www.theodinproject.com' target="_blank" rel="noopener noreferrer">The Odin Project JS Course</a></p>
       </div>
       <div id='im'>
          <img id='profile' alt='profile' src='https://firebasestorage.googleapis.com/v0/b/learning-firebase-b9b2a.appspot.com/o/sasd.jpg?alt=media&token=61a21b0d-82a4-4771-80bf-0afe8ff2191a' />
         <h3>Favorite Tecnologies </h3>
         <div id='tecnologies'>
<a href='https://www.javascript.com/' target="_blank" rel="noopener noreferrer"> <img alt='tech' className='logo-tech' src='https://i0.wp.com/www.casamidia.com.br/wp-content/uploads/2016/03/js-logo.png?ssl=1'/> </a>
<a href='https://www.w3schools.com/html/' target="_blank" rel="noopener noreferrer"> <img alt='tech' className='logo-tech' src='https://w7.pngwing.com/pngs/390/229/png-transparent-logo-html5-brand-design-text-logo-number.png'/> </a>
<a href='https://developer.mozilla.org/pt-BR/docs/Web/CSS' target="_blank" rel="noopener noreferrer"> <img alt='tech' className='logo-tech' src='https://seeklogo.com/images/C/css3-logo-8724075274-seeklogo.com.png'/> </a>
<a href='https://reactnative.dev/' target="_blank" rel="noopener noreferrer"> <img alt='tech' className='logo-tech' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png'/> </a>
<a href='https://nodejs.org/en/' target="_blank" rel="noopener noreferrer"> <img alt='tech' className='logo-tech' src='https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_960_720.png'/> </a>
<a href='https://www.mongodb.com/atlas/database' target="_blank" rel="noopener noreferrer"> <img alt='tech' className='logo-tech' src='https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_plain_wordmark_logo_icon_146423.png'/> </a>
<a href='https://github.com/fabioschitini' target="_blank" rel="noopener noreferrer"> <img alt='tech' className='logo-tech' src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'/> </a>

         </div>
       </div>
    </div>
    </div>
)
}

export default About
