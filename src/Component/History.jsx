import React from "react";
import { useSelector } from "react-redux";

export default function History(props) {
  const { win, totalPlay } = useSelector(
    (rootReducer) => rootReducer.ProjectGameDiceReducer
  );
  return (
    <div className="text-center">
      <div style={{ fontSize: "40px" }}>
        Your Choose:{" "}
        <span className="text-danger">{props.taiXiu ? "Tài" : "Xỉu"}</span>
      </div>
      <div style={{ fontSize: "40px" }}>
        Win: <span className="text-success">{win}</span>
      </div>
      <div style={{ fontSize: "40px" }}>
        TotalPlay : <span className="text-info">{totalPlay}</span>
      </div>
    </div>
  );
}
