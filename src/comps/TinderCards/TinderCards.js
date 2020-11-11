import React, { useState } from 'react'
import './TinderCards.css'
import TinderCard from 'react-tinder-card'

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

    const swiped = (direction, nameToDelete) => {
        console.log("removing" + nameToDelete);
        // setLastDirection(direction);
    };

    const outOfFrame = (name) => {
        console.log(name + " left the screen!");
    };

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                {people.map((person) => (
                <TinderCard
                    className="swipe"
                    key={person.name}
                    preventSwipe={("up", "down")}
                    onSwipe={(dir) => swiped(dir, person.name)}
                    onCardLeftScreen={() => outOfFrame(person.name)}
                >
                    <div 
                    style={{ backgroundImage: `url(${person.url})` }}
                    className="card"
                    >
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
                ))}
            </div>
        </div>
    );
}

export default TinderCards;
