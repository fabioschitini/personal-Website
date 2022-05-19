import '../styles/Project.css'
import {useState} from "react"
import Carousel from 'react-elastic-carousel'

const Registrar=()=>{
    const [showText,setShowText]=useState(false)
   const breakPoints=[{width:1000,itemsToShow:1}]


return(

<div id='container-project'>
    <div className='project-container'>
    <h1>Inventory Application</h1>
    <Carousel breakPoints={breakPoints}>
    <img className='preview-image' src='https://firebasestorage.googleapis.com/v0/b/learning-firebase-b9b2a.appspot.com/o/2022-05-19%20(19).png?alt=media&token=551af3ac-4a4e-49fe-8c20-7df5344a83f2'/>
    <img className='preview-image' src='https://firebasestorage.googleapis.com/v0/b/learning-firebase-b9b2a.appspot.com/o/2022-05-19%20(17).png?alt=media&token=487364b2-7979-4997-ab08-6981d92458e4'/>
    <img className='preview-image' src='https://firebasestorage.googleapis.com/v0/b/learning-firebase-b9b2a.appspot.com/o/2022-05-19%20(15).png?alt=media&token=e9b51d88-3dd0-46e5-a34f-a4377f435771'/>


    </Carousel>
    <p className='content'>A project where I first used Node and Express to create an API on my Backend, and React on my front-end,
    where I Used express to build an API, where you can add clients,Edit it's info and delete it
</p>
<a href='https://fabioschitini.github.io/Registrar-Clientes' target="_blank" rel="noopener noreferrer">Preview</a>
<a href='https://github.com/fabioschitini/Registrar-Clientes' target="_blank" rel="noopener noreferrer">GitHub</a>
</div>

</div>
)
}

export default  Registrar