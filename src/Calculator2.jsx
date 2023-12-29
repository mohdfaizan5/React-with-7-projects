import { useState } from "react"

function Calculator() {
  const [ans, setAns] = useState('0')

  const CreateBtn = ({ value, action }) => {
    const startComputing = (data) => {
      setAns(ans + data)
      console.log(ans)

    }
    return (
      <button className="bg-red-500 rounded-full px-2 m-2" id={value} onClick={() => startComputing({ action })}>{value}
        {/* {console.log(value)} */}
      </button>
    )
  }



  return (
    <main className="flex flex-col items-center gap-3 justify-center">
      <h1 className="text-5xl">Calculator</h1>
      <section className="bg-blue-200">
        <input type="text" value={ans} />
        {/* <span className="px-2 text-3xl w-[100%] bg-gray-700">{ans}</span> */}
        <br />
        <CreateBtn value={1} action={1}/>
        <CreateBtn value={2} action={2}/>
        <CreateBtn value={3} action={3}/>
        <br />
        <CreateBtn value={4} action={4}/>
        <CreateBtn value={5} action={5}/>
        <CreateBtn value={6} action={6}/>
        <br />
        <CreateBtn value={7} action={7}/>
        <CreateBtn value={8} action={8}/>
        <CreateBtn value={9} action={9}/>
        <br />
        <CreateBtn value={'+'} action={'+'}/>
        <CreateBtn value={'-'} action={'-'}/>
        <CreateBtn value={'='} action={'='}/>

      </section>

    </main>
  )
}



export default Calculator