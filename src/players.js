import React, { useState } from "react";
import players from "./data";
import "./App.css";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Player = function () {
  const [index, setIndex] = useState(0);
  const { name, position, nationality, age, number, image } = players[index];

  // console.log(name);

  const checkNumber = function (number) {
    if (number > players.length - 1) {
      return 0;
    }
    if (number < 0) {
      return players.length - 1;
    }

    return number;
  };

  const nextPlayer = () => {
    setIndex((index) => {
      let newPlayer = index + 1;
      return checkNumber(newPlayer);
    });
  };

  const prevPlayer = () => {
    setIndex((index) => {
      let newPlayer = index - 1;
      return checkNumber(newPlayer);
    });
  };

  const randomPlayer = function () {
    let randomNumber = Math.floor(Math.random() * players.length);

    if (randomNumber === index) {
      randomNumber = index + 1;
    }

    setIndex(checkNumber(randomNumber));
  };

  return (
    <main className="container">
      <div>
        <img src={image} alt={name} className="image" />
      </div>
      <div className="description">
        <p>{name}</p>
        <p>{position}</p>
        <p>{nationality}</p>
        <p>{age}</p>
        <p>{number}</p>
      </div>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPlayer}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPlayer}>
          <FaChevronRight />
        </button>
      </div>
      <div className="radom-player-container">
        <button className="btn" onClick={randomPlayer}>
          Random Player
        </button>
      </div>
    </main>
  );
};

export default Player;
