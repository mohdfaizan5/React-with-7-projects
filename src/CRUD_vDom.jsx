import { useState } from "react"

function CRUD_vDom() {

  const [fruits, setFruits] = useState(["apple", "mango"])

  const addFruit = () => {
    setFruits([...fruits, "newFruit"])
  }
  const removeFruit = () => {
    setFruits(fruits.filter(f => f !== "newFruit"))
  }

  const updateFruit = () => {
    setFruits(fruits.map(f => f === "apple"?"apple++": f))
  }

  return (
    <div className="flex flex-col items-center mt-10">
      <div>

        <button onClick={addFruit} className="border bg-black text-white" >Add</button>
        <button onClick={removeFruit} className="border bg-black text-white" >Remove</button>
      <button onClick={updateFruit} className="border bg-black text-white" >Update</button>
      </div>
      <ol>
        {fruits.map((fruit) => (
          <li key={Math.random()}>😋 {fruit}</li>
        ))}

      </ol>
    </div>
  )
}

export default CRUD_vDom