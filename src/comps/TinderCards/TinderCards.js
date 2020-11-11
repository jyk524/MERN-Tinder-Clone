import React, { useState } from 'react'
import './TinderCards.css'

function TinderCards() {

    const[people, setPeople] = useState([
        {
            name: "Jeff Bezos",
            url: 
            "https://en.wikipedia.org/wiki/File:Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_(39074799225)_(cropped).jpg"
        },
        {
            name: "Elon Musk",
            url: 
            "https://en.wikipedia.org/wiki/File:Elon_Musk_Royal_Society.jpg"
        },
    ])

    return (
        <div className="tinderCards">
            {people.map((person) => (
                <h1>{person.name}</h1>
            ))}
        </div>
    )
}

export default TinderCards;
