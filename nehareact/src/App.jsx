
import { useState } from "react";


import Hooks from "./hook";
import Props from "./useEffect-with-props";

function App() {
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState(0);
  return (
    <div>
      <h1> useeffect props</h1>
      <button onClick={() => setCounter(counter + 1)}>counter</button>
      <button onClick={() => setData(data + 1)}>data</button>
      <Props counter={counter} data={data} />
    </div>
  )
}


export default App;





