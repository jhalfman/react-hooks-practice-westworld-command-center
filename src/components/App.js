import React, {useEffect, useState} from "react";
import { Segment } from "semantic-ui-react";
import "../stylesheets/App.css";
import WestworldMap from "./WestworldMap";
import Headquarters from "./Headquarters";

function App() {
  const [hosts, setHosts] = useState([]);
  const [areas, setAreas] = useState([]);
  const [selectedHost, setSelectedHost] = useState({firstName: ""});
  

  useEffect(() => {
    fetch("http://localhost:3001/areas")
    .then(resp=>resp.json())
    .then(areas => setAreas(areas))
  },[])

  useEffect(() => {
    fetch("http://localhost:3001/hosts")
    .then(resp=>resp.json())
    .then(hosts => setHosts(hosts))
  },[])


  return (
    <Segment id="app">
      <WestworldMap areas={areas} hosts={hosts} selectedHost={selectedHost} setSelectedHost={setSelectedHost}/>
      <Headquarters hosts={hosts} selectedHost={selectedHost} setSelectedHost={setSelectedHost}/>
    </Segment>
  );
}

export default App;
