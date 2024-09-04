import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './chai'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Super",
    pwd: 123
  }
  let myArr = [1, 2, 3]

  return <>
   <h1 className="bg-cyan-500 text-black p-8 rounded-xl">Chai aur react | Super</h1>
<Card >

</Card>
  </>
}

export default App
