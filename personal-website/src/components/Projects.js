import '../styles/Project.css'
import {useState} from "react"

const Project=()=>{
return(
<main>

<section class="py-5 text-center container">
  <div class="row py-lg-5">
    <div class="col-lg-6 col-md-8 mx-auto">
      <h1 class="fw-light">Main Projects</h1>
      <p class="lead text-muted">Bellow is located my mains projects that I did  over the time, fell free to see and enjoy.</p>
      <p>
        <a href="https://github.com/fabioschitini" class="btn btn-primary my-2">My GitHub</a>
      </p>
    </div>
  </div>
</section>

<div class="album py-5 bg-light">
  <div class="container">

    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      <div class="col">
        <div class="card shadow-sm">
        <img class="bd-placeholder-img card-img-top" width="100%" height="225" src='https://firebasestorage.googleapis.com/v0/b/learning-firebase-b9b2a.appspot.com/o/2022-06-23%20(4).png?alt=media&token=dfea89e4-fbbf-42ff-b0a9-7d520437fbac'/>

          <div class="card-body">
            <p class="card-text">A project where I first used Node and Express to create an API on my Backend, and React on my front-end,where I Used express to build an API, where you can add clients,Edit it's info and delete it</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <a target="_blank" rel="noopener noreferrer" href='https://intense-reaches-30713.herokuapp.com/catalog' class="btn btn-sm btn-outline-secondary">View</a>
                <a target="_blank" rel="noopener noreferrer" href='https://github.com/fabioschitini/Registrar-Clientes' class="btn btn-sm btn-outline-secondary">Code</a>
              </div>
             
            </div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card shadow-sm">
        <img class="bd-placeholder-img card-img-top" width="100%" height="225" src='https://firebasestorage.googleapis.com/v0/b/learning-firebase-b9b2a.appspot.com/o/2022-06-23%20(2).png?alt=media&token=24270264-4b12-46ae-93fa-72254fc09285'/>

          <div class="card-body">
            <p class="card-text">A project where you can Add,Update,Delete and Visualize Games, it`s plataforms and categorys, built using Node.js,Express and MongoDB.</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
              <a target="_blank" rel="noopener noreferrer" href='https://fabioschitini.github.io/Registrar-Clientes/' class="btn btn-sm btn-outline-secondary">View</a>
                <a target="_blank" rel="noopener noreferrer" href='https://github.com/fabioschitini/inventory-application' class="btn btn-sm btn-outline-secondary">Code</a>
              </div>
              <small class="text-muted">9 mins</small>
            </div>
          </div>
        </div>
      </div>
     
    
   
     

    
     
      
    </div>
  </div>
</div>

</main>
)
}

export default Project