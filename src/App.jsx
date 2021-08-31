import React from 'react'
import Logintbygoogle from '../src/Loginbygoogle/Loginbygoogle'
import Dashboard from "../src/Dashbord/Dashboard";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
    return (
        <>
   <div className="App">  
     <Router>    
      <div className="container">   
        <Switch>    
          <Route exact path='/' exact component={Logintbygoogle} ></Route>    
          <Route path='/Dashboard' component={Dashboard} ></Route>     
        </Switch>
      </div>
    </Router>
    </div>
   </>
    )
}

export default App
