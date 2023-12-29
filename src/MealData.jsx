import axios from "axios"
import { useEffect, useState } from "react"

function MealData() {
  const [items, setItems] = useState([])

  useEffect(() => {
    console.log('hi---->')
    axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=Seafood")
      .then(res => {
        console.log(res.data.meals[0])
        setItems(res.data.meals[0])
      })
  }, [])
  return (
    <div>
      <h1>Meals</h1>
      {items.map(({ strInstructions, strArea }) => (
        <>
          😋😋{strArea}
          faizan{strInstructions}
        </>
      ))}
    </div>
  )
}

export default MealData