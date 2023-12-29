import { useState } from "react"

function Calculator() {
  const [ans, setAns] = useState('0')

  const startComputing = () => {
    setAns(ans + "alsdkjf")
  }

  return (
    <main className="flex flex-col items-center gap-3 justify-center">
      <h1 className="text-5xl">Calculator</h1>
      <section className="bg-blue-200">
        <span className="px-2 text-3xl w-[100%] bg-gray-700">{ans}</span>
        <br />
        <CreateBtn value={1} />
        <CreateBtn value={2} />
        <CreateBtn value={3} />
        <br />
        <CreateBtn value={4} />
        <CreateBtn value={5} />
        <CreateBtn value={6} />
        <br />
        <CreateBtn value={7} />
        <CreateBtn value={8} />
        <CreateBtn value={9} />
        <br />
        <CreateBtn value={'+'} />
        <CreateBtn value={'-'} />
        <CreateBtn value={'='} />

      </section>

    </main>
  )
}

const CreateBtn = ({ value, action }) => {
  return (
    <button className="bg-red-500 rounded-full px-2 m-2" id={value} onClick={() => startComputing()}>{value}</button>
  )
}

export default Calculator