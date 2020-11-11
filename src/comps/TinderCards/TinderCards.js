import React, { useState } from 'react'
import './TinderCards.css'
import TinderCard from 'react-tinder-card'

function TinderCards() {

    const[people, setPeople] = useState([
        {
            name: "Michael Scott",
            url: 
            "https://www.usmagazine.com/wp-content/uploads/2020/03/The-Office-Cast-Then-and-Now-Steve-Carell.jpg?w=700&quality=86&strip=all"
        },
        {
            name: "Jim Halpert",
            url: 
            "https://www.usmagazine.com/wp-content/uploads/2020/03/The-Office-Cast-Then-and-Now-John-Krasinski.jpg?w=700&quality=86&strip=all"
        },
        {
            name: "Dwight Schrute",
            url: 
            "https://www.usmagazine.com/wp-content/uploads/2020/03/The-Office-Cast-Then-and-Now-Rainn-Wilson.jpg?w=700&quality=86&strip=all"
        },
        {
            name: "Pam Beesley",
            url: 
            "https://www.usmagazine.com/wp-content/uploads/2020/03/The-Office-Cast-Then-and-Now-Jenna-Fischer.jpg?w=700&quality=86&strip=all"
        },
        {
            name: "Angela Martin",
            url: 
            "https://www.usmagazine.com/wp-content/uploads/2020/03/The-Office-Cast-Then-and-Now-Angela-Kinsey.jpg?w=700&quality=86&strip=all"
        },
        {
            name: "Kelly Kapoor",
            url: 
            "https://www.usmagazine.com/wp-content/uploads/2020/03/The-Office-Cast-Then-and-Now-Mindy-Kaling.jpg?w=700&quality=86&strip=all"
        },
        {
            name: "Meredith Palmer",
            url: 
            "https://www.usmagazine.com/wp-content/uploads/2020/03/The-Office-Cast-Then-and-Now-Kate-Flannery.jpg?w=700&quality=86&strip=all"
        },
        {
            name: "Phyllis",
            url: "https://www.usmagazine.com/wp-content/uploads/2020/03/The-Office-Cast-Then-and-Now-Phyllis-Smith.jpg?w=700&quality=86&strip=all"
        }
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
