import React, { useState, useEffect } from "react";
import Header from "./design/Header.js";

const Home = () => {
  const [data, setData] = useState([]);
  const url = "http://localhost:8000/";

  const fetchData = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
      {data.map((dataObj, index) => {
        return (
          <div
            style={{
              width: "15em",
              backgroundColor: "#00d6fa",
              padding: 2,
              borderRadius: 10,
              marginBlock: 10,
            }}
          >
            <p style={{ fontSize: 20, color: "white" }}>{dataObj.email}</p>
          </div>
        );
      })}
    </>
  );
};

export default Home;
