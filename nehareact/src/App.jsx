import Header, { Profile, Setting, User } from "./assets/header";

function App() {
  alert(sum());

  return (
    <div>
      <h1>hello</h1>
      <Fruit></Fruit>
      <Header />
      <Profile />
      <Setting />
      <User />
    </div>
  )
}
const userName = "neha yadav"
function Fruit() {
  return (
    <>
      <h1>apple {userName}</h1>
      <button onClick={() => alert("hello")} >click </button>
    </>
  )

}
function sum() {
  return 10 + 10
}

export default App;





