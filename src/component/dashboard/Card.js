import React from "react";

function Card(props) {
  return (
    <div className="col-md-3 my-header">
      <div className="card text-center">
        <div className={`card-header ${props.headerColor} text-white`}>
          <div className="row align-items-center">
            <div className="col">
              <i className={`fa ${props.icon} fa-4x`}></i>
            </div>
            <div className="col">
              <h3 className="display-3">08</h3>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <h3 className={`display-3 ${props.footerColor}`}>{props.name}</h3>
        </div>
      </div>
    </div>
  );
}

export default Card;
