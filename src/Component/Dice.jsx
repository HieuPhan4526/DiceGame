import React from "react";
import { useSelector } from "react-redux";

export default function Dice() {
  const { diceArray } = useSelector(
    (rootReducer) => rootReducer.ProjectGameDiceReducer
  );
  const renderDiceArr = () => {
    return diceArray.map((dice, index) => {
      return (
        <img
          key={index}
          width={50}
          height={50}
          className="mr-2 diceImg"
          src={dice.hinhAnh}
          alt=""
        />
      );
    });
  };
  return <div>{renderDiceArr()}</div>;
}
