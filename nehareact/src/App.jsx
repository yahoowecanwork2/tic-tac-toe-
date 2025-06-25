
import { useState } from "react";


import Hooks from "./hook";
import Props from "./useEffect-with-props";
import LifeCycle from "./lifecycle";

function App() {
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState(0);
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <h1> useeffect props</h1>
      {display ? <LifeCycle counter={counter} data={data} /> : null}
      <button onClick={() => setCounter(counter + 1)}>counter</button>
      <button onClick={() => setData(data + 1)}>data</button>
      <button onClick={() => setDisplay(!display)}>toggle</button>

    </div>
  )
}


export default App;





