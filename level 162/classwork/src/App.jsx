import { useState } from 'react'
import { useForm } from './Hooks/useForm'

function App() {
  let [data, handlechange, reset] = useForm({name: "", email: ""})

  return(
    <>
      <form>
        <label htmlFor="name">name</label><br /><br />
        <input onChange={handlechange} value={data.name} type="text" name='name' id='name' placeholder='name' required/><br /><br />
        <label htmlFor="email">email</label><br /><br />
        <input onChange={handlechange} value={data.email} type="text" name='email' id='email' placeholder='email' required/><br /><br />
        <button onClick={reset} type='button'>reset</button>
      </form><br /><br />
      <p>name: {data.name}</p>
      <p>email: {data.email}</p>
    </>
  )
}

export default App
