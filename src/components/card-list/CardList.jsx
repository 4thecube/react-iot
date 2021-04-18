import React, { useEffect, useState } from "react";
import firebase from "firebase";

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
          {/* <EmptyCard /> */}
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default CardList;
