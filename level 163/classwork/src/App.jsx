import { useState } from 'react'
import { createContext } from 'react'
import Test from './components/Test'

export let MyContext = createContext()

function App() {
  let [dark, setDark] = useState(false)

  return(
    <>
      <button onClick={() => setDark(!dark)}>dark mode</button>
      <MyContext.Provider value={{dark, setDark}}>
        <Test />
      </MyContext.Provider>
    </>
  )
}

export default App
