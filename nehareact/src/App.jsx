import { useState } from "react";
import Inline from "./inline-style";
import Dynamic from "./dynamic-inline";
import External from "./external-css";
import Module from "./modulles-css";

function App() {

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <Module />
      <Module />
      <Module />
      <Module />
      <Module />
      <Module />
      <Module />
      <Module />

    </div>
  )
}


export default App;









