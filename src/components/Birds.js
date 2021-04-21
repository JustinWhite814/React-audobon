import React from 'react';
import {useState, useEffect} from 'react'

function Birds(props) {
    const [birds, setBirds] = useState()
    useEffect(()=> {
        fetch(`https://audubon-api.herokuapp.com/api/birds`)
        .then(res => res.json())
        .then(data =>setBirds(data) )
        .catch(console.error)
    },[])
    return (
        <div>
            <h1>Hello</h1>
        </div>
    );
}

export default Birds;