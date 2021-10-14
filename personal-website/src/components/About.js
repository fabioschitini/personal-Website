import '../styles/About.css'
const About=()=>{
return(
<div id='container'>

<h1>Fabio Schitini</h1>
    <div id='container-about'>
       
        <div id='main-info'>

        
    
       <h2 >About me</h2>
       <p>I am an Aspiring Web Developer.I am a JaveScript developer, using React to create
         fronteEnd functionality and,at least for now,
        using fireBase(backend as service) to maintain the backEnd.
        I intend to study node.js on the net one the next
        months to have an skill on backend as well.
        I have done  several projects on <a href='https://www.theodinproject.com'>The odin projeect</a>,
        where I lerned most of my current skils.
        I am always learning, and loking forward to an carrer as an Web Developer
           
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
       <p><a href='https://www.theodinproject.com'>The Odin Project JS Course</a></p>
       </div>
       <div id='im'>
          <img id='profile' alt='profile' src='https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270' />

       </div>
    </div>
    </div>
)
}

export default About