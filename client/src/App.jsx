import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [name, setName] = useState('')

  useEffect(() => {
    getName()
  }, [])

  const getName = async() => {
    const response = await axios.get('https://3.110.154.75/name')
    setName(response.data.name)
  }

  return (
    <div className="absolute top-2/4 left-2/4" style={{transform: 'translate(-50%, -50%)'}}>
      <h1 className='text-4xl font-bold'>Hello my name is {name}</h1>
    </div>
  )
}

export default App
