import { useState } from "react"

function Counter() {

  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center mt-10 gap-5">

      <h1 className="">Counter</h1>
      <h2 className="text-5xl">{count}</h2>
      <div className="flex">
        <button onClick={() => setCount(count + 1)} className="border flex items-center justify-center px-4 py-2 bg-blue-500 text-white text-xl font-semibold rounded-full">👆</button>
        <button onClick={() => setCount(count - 1 )} className="border flex items-center justify-center px-4 py-2 bg-blue-500 text-white text-xl font-semibold rounded-full">👇</button>
      </div>
    </div>
  )
}

export default Counter