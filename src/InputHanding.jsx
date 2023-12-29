import { useState } from "react"

function InputHanding() {

  



  // const [inputValue, setInputValue] = useState('');

  // return (
  //   <div>
  //     <input type="text" value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
  //     <p>You typed: {inputValue}</p>
  //   </div>
  // );

  // ////////////////////////////////





  const [userInput, setUserInput] = useState("")

  return (
    <div>
      <form>
        <input value={userInput} onChange={(e)=> setUserInput(e.target.value)} type="text" className="border" />
        <div>👉👉{userInput}</div>
        <input type="submit" value={"Submit"}  />
      </form>
    </div>
  )
}

export default InputHanding