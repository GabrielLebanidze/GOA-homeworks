import { useState } from 'react'


function App() {
  const [userInfo, setUserInfo] = useState({})

  function handleChange({target}){
    let {name, value} = target
    setUserInfo({...userInfo, [name]: value})
  }
  
  console.log(userInfo)

  return (
    <>
      <input type="text" name='fullname' onChange={handleChange}/>
      <br /><br />
      <input type="email" name='email' onChange={handleChange}/>
      <br /><br />
      <input type="password" name='password'onChange={handleChange}/>
    </>
  )
}

export default App
