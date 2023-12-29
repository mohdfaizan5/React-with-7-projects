import BookDB from "./BookDB"
import CRUD_vDom from "./CRUD_vDom"
import Calculator from "./Calculator2"
import Counter from "./Counter"
import InputHanding from "./InputHanding"
import LightDarkThemer from "./LightDarkThemer"
import MealData from "./MealData"
import Todo from "./Todo"
import LandingPage from "./components/LandingPage"
import NavBar from "./components/Navbar"



const LearnMap = () => {
  const userDetails = [
    {
      name: "faizan",
      age: 20,
      profession: "Full stack dev"
    },
    {
      name: "Liki",
      age: 19,
      profession: "Manager"
    },
    {
      name: "Zaid",
      age: 38,
      profession: "CEO @ZTB"
    },
  ]
  const fruits = ["apple", "mango", "banana", "watermelon", "jackfruit"]
  return (
    <>
      {userDetails.map((d) => (
        <h1>Name {d.name}</h1>
      ))}
      {fruits.map((fruit) => (
        <>
          <h1 id={fruit}>{fruit}</h1>
          <h2>✔</h2>
        </>
      ))}
    </>
  )
}

function App() {
  document.title = "black"
  return (
    <>
      {/* <Counter/> */}
      {/* <CRUD_vDom/> */}
      {/* <BookDB/> */}
      {/* <Todo/> */}
      {/* <InputHanding/> */}
      {/* <MealData/> */}
      {/* <Calculator/> */}
      <LightDarkThemer/>
    </>
  )
}

export default App
