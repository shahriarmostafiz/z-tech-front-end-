import { useContext, useState } from 'react'
import './App.css'
import { AuthContext } from './AuthProvider/AuthProvider'

function App() {
  const [count, setCount] = useState(0)
  const { user } = useContext(AuthContext)
  return (
    <>
      {user}
    </>
  )
}

export default App
