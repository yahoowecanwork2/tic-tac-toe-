
import { useState } from "react";
import Props from "./props";
import Wraper from "./propsad";
function App() {

  return (
    <div>
      <h1>hello</h1>
      {/* <Props name="neha" />
      <Props /> */}
      <Wraper>
        <h1>hello eveyone</h1>
      </Wraper>
      <Wraper>
        <h1>hello eveyone</h1>
      </Wraper>
      <Wraper>
        <h1>hello eveyone</h1>
        <h2>please login</h2>
      </Wraper>
    </div>
  )
}


export default App;





