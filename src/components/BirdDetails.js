import React from 'react';
import {useState, useEffect} from 'react'

function BirdDetails({ match, bird, setBird }) {
   
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
                src={'blah'}
                alt="Acadian Flycatcher"
              />
              <div className="details">
                <h2>{}</h2>
                <h3>{}</h3>
                <h4>{}</h4>
                <p>
                  Would be vulnerable to loss of habitat, but no significant decline noted
                  so far. In some regions, Brown-headed Cowbirds often lay eggs in nests
                  of this species.
                </p>
                <a
                  href={`https://www.audubon.org/field-guide/bird/{match}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                </a>
              </div>
            </div>
          );
    
}

export default BirdDetails
