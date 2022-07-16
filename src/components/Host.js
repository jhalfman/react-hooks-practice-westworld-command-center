import React from "react";
import { Card } from "semantic-ui-react";
import "../stylesheets/Host.css";

function Host({host, selectedHost, setSelectedHost}) {
  /* NOTE: The className "host selected" renders a different style than simply "host". */
  return (
    <Card
      className={host.firstName === selectedHost.firstName ? "host selected" : "host"}
      onClick={() => setSelectedHost(host)}
      image={host.imageUrl}
      raised
      link
    />
  );
}

export default Host;
