import React from "react";
import Map from "../map/Map";

import "./Card.scss";

import sleepy from "../../assets/panda.svg";
import cloud from "../../assets/cute_cloud.svg";

const Card = ({ data, place }) => {
  console.log(data);
  const { temperature, humidity, rain, timeStamp, dayStamp } = data;

  const convertedToDate = new Date(data.dayStamp);
  const fullMonthTimeStamp = convertedToDate.toLocaleString("default", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  let hot = "so fucking hot";
  let cold = "freeeeezeeee";
  let normal = "seems like everything is OK";

  let highHumidity = "humidity is too hight";
  let lowHumidity = "humidity is too low";

  let highRainingSensorData = "no water on the sensor, or the sensor fucked up";
  let lowRainingSensorData = "ohh, somebody is wet";

  console.log(fullMonthTimeStamp);

  return (
    <div className="card">
      <div className="card__timestamp">
        Data received at{" "}
        <span className="colored-timestamp">
          {timeStamp} - {fullMonthTimeStamp}
        </span>
      </div>
      <div className="card__temperature-title">Temperature</div>
      <div className="card__temperature bordered brd-bot border-gradient">
        {Math.floor(temperature)} ℃
        <span className="card__measure-message">
          {temperature > 30 ? hot : temperature < 5 ? cold : normal}
        </span>
      </div>
      <div className="card__humidity-title">Humidity</div>
      <div className="card__humidity bordered brd-top border-gradient">
        {Math.floor(humidity)} %
        <span className="card__measure-message">
          {humidity > 70 ? highHumidity : humidity < 30 ? lowHumidity : normal}
        </span>
      </div>

      <div className="card__rain-sensor-title ">Water sensor</div>

      <div className="card__rain-sensor bordered border-gradient">
        {rain > 1000 ? (
          <img className="rain-sensor__image" src={sleepy} />
        ) : (
          <img className="rain-sensor__image" src={cloud}></img>
        )}
        <span className="card__measure-message">
          {rain > 1000 ? highRainingSensorData : lowRainingSensorData}
        </span>
      </div>
      <div className="card__humidity-title">Pressure</div>
      <div className="card__humidity bordered brd-top border-gradient">
        <span className="card__measure-message">Will be added soon</span>
      </div>
    </div>
  );
};

export default Card;
