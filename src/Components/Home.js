import { useState, useEffect } from "react";
import "./Home.css";
import Top from "./Top";
import Bottom from "./Bottom";
import json_data from "./data.json";

function Home() {

  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [balance, setBalance] = useState(0);
  
  useEffect(() => {
    getData();
    if (loaded) {
      let bal = 0;
      data.map(datum => {bal += datum.amount});
      setBalance(bal);
    }
      
  });

  function getData() {
    const newData = json_data;
    setData(newData);
    setLoaded(true);
  }

  return (
    <div className="container">
      <Top balance={balance} />
      <Bottom data={data} balance={balance} />
    </div>
  )
}

export default Home;