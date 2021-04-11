import React, { useState } from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";
function TinderCards() {
  //useState hook to manage state
  const [people, setPeople] = useState([
    {
      name: "Sachin Tendulkar",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVJrTa7Oxf39xMTdlSo-JwzUYVFVWKo7nZCw&usqp=CAU",
    },
    {
      name: "Shakrukh Khan",
      url: "",
    },
  ]);

  //utility functions
  const Swiped = (direction, nameToBeDeleted) => {
    console.log("removing: ", nameToBeDeleted);
  };

  const outOfFrame = (name) => {
    console.log(name);
  };
  //return statment for this particular component
  return (
    <div className="tinderCards">
      <div className="tindercards-container">
        {people.map((person) => {
          return (
            <TinderCard
              className="swipe"
              key={person.name}
              preventSwipe={["up", "down"]}
              onSwipe={(dir) => Swiped(dir, person.name)}
              onCardLeftScreen={() => outOfFrame(person.name)}
            >
              {/* this div canbe rendered vis passing props  */}
              <div
                style={{ backgroundImage: `url(${person.url})` }}
                className="card"
              >
                <h3> {person.name}</h3>
              </div>
            </TinderCard>
          );
        })}
      </div>
    </div>
  );
}

export default TinderCards;
