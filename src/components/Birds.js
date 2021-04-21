import React from 'react';
import { useState, useEffect } from 'react'

function Birds(props) {
    const [birds, setBirds] = useState([])
    const fetchBird = () => {
        fetch('https://audubon-api.herokuapp.com/api/birds')
        .then(res => res.json())
        .then(res => {
       
        setBirds(res) 
      
     })
     
    }
    useEffect(()=> {fetchBird()},[])
    return (
        
        <section className="container">
            {birds.map((bird) => {
                return (
                    <div className="card" key={bird.name}>
                    <div className="card-image">
                    <img
                    src={bird.image}
                    alt=''
                    />
                    </div>
                    <div className="card-title">
                    <h3>{bird.name}</h3>
                </div>
            </div>
                )
            })}
            
        </section>
        
    );
}

export default Birds;