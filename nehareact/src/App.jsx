// import Header, { Profile, Setting, User } from "./assets/header";
// import State from "./state";
// import Counter from "./counter";
import { useState } from "react";
import Props from "./props";

function App() {
  // alert(sum());
  // let userName = "neha"
  // let age = 21
  // let emails = "neha@gmail.com"
  // let collageName = ["mdu", "iti", "nit"];
  // let userObject = {
  //   userName: "neha",
  //   age: 21,
  //   emails: "neha@gmail.com"
  // };
  let [student, setStudent] = useState()

  return (
    <div>
      <h1>hello</h1>
      {/* <Fruit></Fruit>
      <Header />
      <Profile />
      <Setting />
      <User /> */}
      {/* <State /> */}
      {/* <Toggle /> */}
      {/* <Counter /> */}
      {/* <Props name="neha" age={21} email="neha@gmail.com" /> */}
      {/* <Props userName={userName} age={age} email={emails} /> */}
      {
        student && < Props studentName={student} />}
      <button onClick={() => setStudent("monty")}>show aur hide </button>


      {/* <Props user={userObject} name={collageName} /> */}
    </div>
  )
}
// const userName = "neha yadav"
// function Fruit() {
//   return (
//     <>
//       <h1>apple {userName}</h1>
//       <button onClick={() => alert("hello")} >click </button>
//     </>
//   )

// }
// function sum() {
//   return 10 + 10
// }

export default App;





