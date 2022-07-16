import React from "react";
import { Segment } from "semantic-ui-react";
import Area from "./Area";

function WestworldMap({areas, hosts, selectedHost, setSelectedHost}) { 

  return <Segment id="map">{areas.map(area => {
    return <Area selectedHost={selectedHost} name={area.name} limit={area.limit} auth_req={area.auth_req} key={area.name} hosts={hosts.filter(host=>host.area === area.name)} setSelectedHost={setSelectedHost}/>
  })}</Segment>;
}

export default WestworldMap;
