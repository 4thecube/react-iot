import React, { useEffect, useState } from "react";
import firebase from "firebase";

import Map from "../map/Map";

import hot from "../../assets/hot.png";
import humidity_2 from "../../assets/humidity(1).png";
import cold from "../../assets/cold.png";
import sunAndCloud from "../../assets/Sun_cloud.svg";
import cute_cloud from "../../assets/cute_cloud.svg";

import "./CardList.scss";
import Card from "../card/Card";
import Loader from "../loader/Loader";
import EmptyCard from "../empty-card/EmptyCard";

const CardList = () => {
  const [data, setData] = useState({
    temperature: null,
    humidity: null,
    rain: null,
    timeStamp: null,
    dayStamp: null,
  });

  useEffect(() => {
    const dataRef = firebase.database().ref("/");
    dataRef.on("value", (snapshot) => {
      setData(snapshot.val());
    });
  }, []);

  return (
    <div className="card-container">
      {data.temperature ? (
        <>
          <Card data={data} place='Kitchen' />
          <EmptyCard />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default CardList;
