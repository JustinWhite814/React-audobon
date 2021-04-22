import React from 'react';
import {useState, useEffect} from 'react'

function BirdDetails({ match }) {
   const [bird, setBird] = useState([])
    useEffect(()=> {
        fetch(`https://audubon-api.herokuapp.com/api/birds/${match.params.id}`)
        .then(res => res.json())
        .then(res => setBird(res))
    }
    ,[]) 
    
    console.log(bird)
    
    return (
        
            <div className="details-container">
              <img
                src={bird.image}
                alt="Acadian Flycatcher"
              />
              <div className="details">
                <h2>{bird.name}</h2>
                <h3>{bird.genus}</h3>
                <h4>{bird.conservationStatus}</h4>
               
                
                
              </div>
            </div>
          );
    
}

export default BirdDetails
