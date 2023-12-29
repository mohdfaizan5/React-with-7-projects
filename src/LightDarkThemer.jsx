import { useState } from "react"

const LightDarkThemer = () => {
  const [bgColor, setBgColor] = useState("#b91c1c")
  const [textColor, setTextColor] = useState("#b91c1c")
  // const [textColor, set] = useState("#b91c1c")
  return (
    <main className={`h-screen bg-[#b91c1c]`}>
      {bgColor}
      <button className="bg-white border-5">White theme</button>
      <div className="flex">

      <h1 className={"text-4xl"}>Welcome to the World</h1>
      </div>
      
    </main>
  )
}

export default LightDarkThemer