import { useEffect, useEffectEvent, useState } from 'react'

function App() {
  const [color, setColor] = useState(localStorage.getItem("backgroundColor") || "white")

  useEffect(() => {
    localStorage.setItem("backgroundColor", color)
  }, [color])

  function colorr(a){
    setColor(a)
  }

  return (
    <div style={{backgroundColor: color}}>
      <button onClick={() => colorr("red")}>red</button>
      <button onClick={() => colorr("blue")}>blue</button>
      <button onClick={() => colorr("green")}>green</button>
      <button onClick={() => colorr("yellow")}>yellow</button>
      <button onClick={() => colorr("purple")}>purple</button>
      <p>background color: {color}</p>
    </div>
  )

}

export default App
