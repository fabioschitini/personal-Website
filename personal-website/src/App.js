import './App.css';
import Navs  from './components/Nav';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import About from './components/About';
import Project from './components/Projects';
import InventoryApplication from './components/InventoryApplication';
import Registrar from './components/Registrar';


function App() {

  return (

    <div className="App">
      <Router> 
      <Navs/>       
        <Switch>
            <Route exact path='/personal-Website'><About/>  </Route>
          <Route exact path='/projects'><Project /> </Route>
          <Route exact path='/inventory'><InventoryApplication /> </Route>
          <Route exact path='/registrar'><Registrar /> </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
