import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Body from './components/Body'
import Card from './components/Card'


function App() {
  const [count, setcount]= useState(0)

  return(
    <div>
      <Body/>
    </div>
  )
  }

export default App;
