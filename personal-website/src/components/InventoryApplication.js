import '../styles/Project.css'
import {useState} from "react"
import Carousel from 'react-elastic-carousel'

const InventoryApplication=()=>{
    const [showText,setShowText]=useState(false)
   const breakPoints=[{width:1000,itemsToShow:1}]


return(

<div id='container-project'>
    <div className='project-container'>
    <h1>Inventory Application</h1>
    <Carousel breakPoints={breakPoints}>
    <img className='preview-image' src='https://firebasestorage.googleapis.com/v0/b/learning-firebase-b9b2a.appspot.com/o/2022-05-19%20(2).png?alt=media&token=5309e467-7584-4dc8-9c2c-d822fd65fe83'/>
    <img className='preview-image' src='https://firebasestorage.googleapis.com/v0/b/learning-firebase-b9b2a.appspot.com/o/2022-05-19%20(4).png?alt=media&token=65c96241-b3a2-4246-add6-e873404dcf86'/>
    <img className='preview-image' src='https://firebasestorage.googleapis.com/v0/b/learning-firebase-b9b2a.appspot.com/o/2022-05-19%20(6).png?alt=media&token=0253209f-4e61-43d4-94df-95b763d5fa16'/>
    <img className='preview-image' src='https://firebasestorage.googleapis.com/v0/b/learning-firebase-b9b2a.appspot.com/o/2022-05-19%20(7).png?alt=media&token=730e0ea8-2468-457b-a005-443c178ae0bc'/>


    </Carousel>
    <p className='content'>Inventory Application=>A project where you can Add,Update,Delete andVisualize Games, it`s plataforms and
categorys, built using Express and MongoDB. Had some dificulty with the small details, where sometimes they
would cause errors there are difficult to pinpoint
Featuring
The use of an NoSQL Database for storaging the games info(MongoDB)
The possobility to see the game details, like it`s name,description, amount, studio, plataform and categories
A way to Create,Update and Delete(CRUD) the game details, the plataforms available and the categories of the
game.
</p>
<a href='https://intense-reaches-30713.herokuapp.com/catalog' target="_blank" rel="noopener noreferrer">Preview</a>
<a href='https://github.com/fabioschitini/inventory-application' target="_blank" rel="noopener noreferrer">GitHub</a>
</div>

</div>
)
}

export default  InventoryApplication