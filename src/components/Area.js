import React from "react";
import "../stylesheets/Area.css";
import Host from "./Host";

function Area(props) {
  return (
    <div
      className="area"
      id={
        props.name
      }
    >
      <h3 className="labels">
        {props.name}
      </h3>
      {props.hosts.map(host => {
        if (host.active){
          return <Host host={host} key={host.firstName} selectedHost={props.selectedHost} setSelectedHost={props.setSelectedHost}/>
        }
        else return null
      })}
    </div>
  );
}

Area.propTypes = {
  hosts: function (props) {
    if (props.hosts.length > props.limit) {
      throw Error(
        `HEY!! You got too many hosts in ${props.name}. The limit for that area is ${props.limit}. You gotta fix that!`
      );
    }
  },
};

export default Area;
