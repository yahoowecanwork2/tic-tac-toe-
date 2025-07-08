import { useState } from "react";
import CollegeData from "./collageapi";
import { contextData } from "./contextapi";

function App() {
  const [subject, setSubject] = useState('english');

  return (
    <div style={{ backgroundColor: "yellow", padding: 10 }} >
      <contextData.Provider value={subject}>
        <select value={subject} onChange={(event) => setSubject(event.target.value)}>
          <option value="">select subject</option>
          <option value="math">Math</option>
          <option value="hindi">Hindi</option>
          <option value="english">english</option>
          <option value="science">science</option>


        </select>
        <h1>API context</h1>
        <button onClick={() => setSubject("")}>clear</button>
        < CollegeData />
      </contextData.Provider>



    </div >
  )
}


export default App;









