import '../styles/About.css'
const About=()=>{
return(
<div id='container'>

<h1>Fabio Schitini</h1>

    <div id='container-about'>
        <div id='main-info'>

        
    
       <h2 >About me</h2>
       <p>
    I am an Aspiring Web Developer. I am a JavaScript developer, using React to create
         frontEnd functionality and, at least for now,
        using fireBase(backend as service) to maintain the backEnd.
        I intend to study node.js on the net in the next few
        months to have a skill on backend as well.
        I have done  several projects on <a href='https://www.theodinproject.com' target="_blank" rel="noopener noreferrer">The odin projeect</a>,
        where I learned most of my current skils.
        I am always learning, and looking forward to a career as a Web Developer
           
             </p>
       <h2>Tecnologies </h2>
       <ul id='tech-list'>
          <li>JS</li>
          <li>HTML</li>
          <li>CSS</li> 
          <li>React</li>
          <li>Firebase(database and backend as a service)</li>

       </ul>
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
<a href='https://firebase.google.com/?hl=pt' target="_blank" rel="noopener noreferrer"> <img alt='tech' className='logo-tech' src='https://firebase.google.com/downloads/brand-guidelines/PNG/logo-vertical.png?hl=pt-br'/> </a>
<a href='https://github.com/fabioschitini' target="_blank" rel="noopener noreferrer"> <img alt='tech' className='logo-tech' src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'/> </a>

         </div>
       </div>
    </div>
    </div>
)
}

export default About
