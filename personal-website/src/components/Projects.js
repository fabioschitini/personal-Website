import '../styles/Project.css'
import {useState} from "react"

const Project=()=>{
    const [showText,setShowText]=useState(false)
    const projects=[
        {text1:'Tic-Tac-Toe',color:'#9b8d8d',finalText1:"Code",finalText2:"Live Review",finalText3:"An Game of Tic Tac Toe",
 linkCode:'link',linkPreview:'link'
},
{text1:'Calculator',color:'cadetblue',finalText1:"Code",finalText2:"Live Review",finalText3:"One Web Calculator",
linkCode:'link',linkPreview:'link'
}, {text1:'Rock-Pape-Scissors',color:'yellowgreen',finalText1:"Code",finalText2:"Live Review",finalText3:"Classic Childhood Game",
linkCode:'link',linkPreview:'link'
},
{text1:'Etch a Sketch',color:'palegoldenrod',finalText1:"Code",finalText2:"Live Review",finalText3:"Dram a sketch on a grid",
linkCode:'link',linkPreview:'link'
},
{text1:'Memory Card',color:'mediumpurple',finalText1:"Code",finalText2:"Live Review",finalText3:"Play a Game of memeory Card",
linkCode:'link',linkPreview:'link'
},
{text1:'Library',color:'darkseagreen',finalText1:"Code",finalText2:"Live Review",finalText3:"Story info about your books",
linkCode:'link',linkPreview:'link'
},
{text1:'Restauraunt',color:'orangered',finalText1:"Code",finalText2:"Live Review",finalText3:"A menu from a restaraunt",
linkCode:'link',linkPreview:'link'
},
{text1:'CV',color:'goldenrod',finalText1:"Code",finalText2:"Live Review",finalText3:"Make you own CV!",
linkCode:'link',linkPreview:'link'
},
{text1:'Shopin-Cart',color:'lightpink',finalText1:"Code",finalText2:"Live Review",finalText3:"An generic Shoping website",
linkCode:'link',linkPreview:'link'
},
{text1:'Where is Waldo',color:'dimgrey',finalText1:"Code",finalText2:"Live Review",finalText3:"Fun game of Where is Waldo",
linkCode:'link',linkPreview:'link'
},
{text1:'hairBook',color:'#9f3535',finalText1:"Code",finalText2:"Live Review",finalText3:"An 'copy' of FaceBook",
linkCode:'link',linkPreview:'link',

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
      <p>{project.finalText2}</p> 
      <p>{project.finalText1}</p> 
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