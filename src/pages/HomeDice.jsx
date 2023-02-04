import React from "react";
import History from "../Component/History";
import { useSelector, useDispatch } from "react-redux";
import { DAT_CUOC, PLAY_GAME } from "../redux/Types/ProjectGameDiceTypes";
import Dice from "../Component/Dice";

export default function HomeDice() {
  const { taiXiu } = useSelector(
    (rootReducer) => rootReducer.ProjectGameDiceReducer
  );
  const dispatch = useDispatch();
  return (
    <div className="bgGame">
      <div className="text-center mt-5" style={{ fontSize: "50px" }}>
        Game Dice
      </div>
      <div className="container">
        <div className="row text-center gameCol">
          <div className="col-4">
            <button
              style={{ width: "150px", height: "150px", fontSize: "30px" }}
              className="btn btn-info"
              onClick={() => {
                dispatch({
                  type: DAT_CUOC,
                  taiXiu: true,
                });
              }}
            >
              Tài
            </button>
          </div>
          <div className="col-4">
            <Dice />
          </div>
          <div className="col-4">
            <button
              style={{ width: "150px", height: "150px", fontSize: "30px" }}
              className="btn btn-info"
              onClick={() => {
                dispatch({
                  type: DAT_CUOC,
                  taiXiu: false,
                });
              }}
            >
              Xỉu
            </button>
          </div>
        </div>
        <History taiXiu={taiXiu} />
        <div className="text-center">
          <button
            onClick={() => {
              dispatch({
                type: PLAY_GAME,
              });
            }}
            className="btn btn-warning"
          >
            Play Game
          </button>
        </div>
      </div>
    </div>
  );
}
