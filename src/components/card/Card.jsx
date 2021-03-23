import React from "react";
import Map from "../map/Map";

import "./Card.scss";

const Card = ({ data, place }) => {
  const rainSensor =
    data.rain > 900 ? (
      <div className="rain-status-container-green"></div>
    ) : (
      <div className="rain-status-container-red"></div>
    );
  return (
    <div className="card">
      <div className="card__timestamp">
        <span className="timestamp">
          Timestamp: <br></br> {data.timeStamp} - {data.dayStamp}
        </span>
      </div>
      <div className="card__map">
        <Map />
      </div>
      <div className="card__data-container">
        <div className="card__name">{place}</div>
        <div className="card__data">
          <span className="data__temp">
            Temperature:{" "}
            <span
              className={`${data.temperature > 32 ? "dangerous-hot" : null} ${
                data.temperature < -20 ? "dangerous-cold" : null
              } humidity`}
            >
              {data.temperature.toFixed(1)} °C
            </span>
          </span>
        </div>
        <div className="card__data">
          <span className="data__hum">
            Humidity:{" "}
            <span
              className={`${
                data.humidity < 60 && data.humidity > 40 ? "" : "dangerous"
              } humidity`}
            >
              {data.humidity.toFixed(2)} %
            </span>
          </span>
        </div>
        <div className="card__data">
          <span className="data__rain-sensor">Water sensor {rainSensor}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
