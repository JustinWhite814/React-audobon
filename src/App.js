import React from 'react';
import Birds from './components/Birds'
import {Route, Router} from 'react-router-dom'
import BirdDetails from './components/BirdDetails';
import {useState, useEffect} from 'react'
function App() {
  const [bird, setBird] = useState();
  return (
   
    <>
      <header>
        <h1>
          <a href="/">Audubon Society</a>
          
        </h1>
      </header>
      <main>
      <Route exact path='/' component={Birds}/>
      <Route exact path='/details/:id' render={routerProps => 
      <BirdDetails setBird={setBird} 
                   match={routerProps.match} 
                   bird={bird}/>} />
      
      </main>
    </>
  );
}

export default App;
