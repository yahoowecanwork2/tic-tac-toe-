
import { useState } from "react";


function App() {
  const [val, setVal] = useState("neha")
  return (
    <div>
      <h1>Get input value</h1>
      <input type="text" value={val} onChange={(event) => setVal(event.target.value)} placeholder="Enter user name" />
      <h1>{val}</h1>
      <button onClick={() => setVal("")}>clear all</button>
    </div>
  )
}


export default App;





