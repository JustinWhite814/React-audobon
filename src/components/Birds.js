import React from 'react';
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

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
            <Link to={`/details/${bird.id}`} key={bird.id}>
            <div className="card">
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
            </Link>
        )
    })}
    
</section>

);
}

export default Birds;