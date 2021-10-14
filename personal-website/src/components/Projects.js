import '../styles/Project.css'
import {useState} from "react"

const Project=()=>{
    const [showText,setShowText]=useState(false)
    const projects=[
        {text1:'hairBook',color:'#9f3535',finalText1:"Code",finalText2:"Live Review",finalText3:"An 'copy' of FaceBook",
linkCode:'https://github.com/fabioschitini/hairBook',linkPreview:'https://fabioschitini.github.io/hairBook/',

},
{text1:'Where is Waldo',color:'dimgrey',finalText1:"Code",finalText2:"Live Review",finalText3:"Fun game of Where is Waldo",
linkCode:'https://github.com/fabioschitini/Waldo',linkPreview:'https://fabioschitini.github.io/Waldo/'
},
{text1:'Memory Card',color:'mediumpurple',finalText1:"Code",finalText2:"Live Review",finalText3:"Play a Game of memory Card",
linkCode:'https://github.com/fabioschitini/Memory-Card',linkPreview:'https://fabioschitini.github.io/Memory-Card/'
},
{text1:'Shopin-Cart',color:'lightpink',finalText1:"Code",finalText2:"Live Review",finalText3:"An generic Shoping website",
linkCode:'https://github.com/fabioschitini/Shoping-Cart',linkPreview:'https://fabioschitini.github.io/Shoping-Cart/'
},
{text1:'CV',color:'goldenrod',finalText1:"Code",finalText2:"Live Review",finalText3:"Make you own CV!",
linkCode:'https://github.com/fabioschitini/CV-Application',linkPreview:'https://fabioschitini.github.io/CV-Application/'
},
{text1:'Calculator',color:'cadetblue',finalText1:"Code",finalText2:"Live Review",finalText3:"One Web Calculator",
linkCode:'https://github.com/fabioschitini/Calculator',linkPreview:'https://fabioschitini.github.io/Calculator/'
},
        {text1:'Tic-Tac-Toe',color:'#9b8d8d',finalText1:"Code",finalText2:"Live Review",finalText3:"An Game of Tic Tac Toe",
 linkCode:'https://github.com/fabioschitini/Tac-Toe',linkPreview:'https://fabioschitini.github.io/Tac-Toe/'
},

 {text1:'Rock-Pape-Scissors',color:'yellowgreen',finalText1:"Code",finalText2:"Live Review",finalText3:"Classic Childhood Game",
linkCode:'https://github.com/fabioschitini/rock-paper-scissors',linkPreview:'https://fabioschitini.github.io/rock-paper-scissors/'
},
{text1:'Etch a Sketch',color:'palegoldenrod',finalText1:"Code",finalText2:"Live Review",finalText3:"Dram a sketch on a grid",
linkCode:'https://github.com/fabioschitini/ETCH-A-SKETCH',linkPreview:'https://fabioschitini.github.io/ETCH-A-SKETCH/'
},

{text1:'Library',color:'darkseagreen',finalText1:"Code",finalText2:"Live Review",finalText3:"Story info about your books",
linkCode:'https://github.com/fabioschitini/Library',linkPreview:'https://fabioschitini.github.io/Library/?'
},
{text1:'Restauraunt',color:'orangered',finalText1:"Code",finalText2:"Live Review",finalText3:"A menu from a restaraunt",
linkCode:'https://github.com/fabioschitini/Restaurant',linkPreview:'https://fabioschitini.github.io/Restaurant/'
},




]

function mouseEnter(e){
    console.log(e.target.attributes.value.value)
setShowText(e.target.attributes.value.value)

}
function mouseLeave(){
    setShowText(false)
    }
return(
<div id='container-project'>
<div id='grid'> 
{projects.map(project=>{
return <div>
        {(showText===project.text1)? 
            <div value={project.text1} style={{backgroundColor:project.color}} id={project.text1} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} className='grid-square'>
        <h1  value={project.text1} className='Title'>{project.text1}</h1>

        
 <p >{project.finalText3}</p>  
 <div className='details'>
      <a className='link-projects' href={project.linkPreview} target="_blank" rel="noopener noreferrer">{project.finalText2}</a> 
      <a className='link-projects' href={project.linkCode} target="_blank" rel="noopener noreferrer">{project.finalText1}</a> 
        </div>
</div>
      :<div value={project.text1} style={{backgroundColor:project.color}} id={project.text1} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} className='grid-square'>
      <h1 style={{marginTop:'50px'}} value={project.text1} className='Title'>{project.text1}</h1>
      </div>

    }

</div>
})}
</div>
</div>
)
}

export default Project