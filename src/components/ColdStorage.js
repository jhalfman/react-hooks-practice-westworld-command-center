import React from "react";
import { Segment } from "semantic-ui-react";
import Host from "./Host";

function ColdStorage({hosts, setSelectedHost, selectedHost}) {
  
  return (
    <Segment.Group className="HQComps">
      <Segment compact>
        <h3 className="labels">ColdStorage</h3>
      </Segment>
      <Segment compact>
        {hosts.map(host=> {
          if (!host.active) {
            return <Host key={host.firstName} host={host} setSelectedHost={setSelectedHost} selectedHost={selectedHost}/>
          }
        })}
      </Segment>
    </Segment.Group>
  );
}

export default ColdStorage;
