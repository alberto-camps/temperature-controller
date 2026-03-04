import { useState } from 'react'
import React from 'react'
import TempDisplay from './components/TempDisplay'
import TempControls from './components/TempControls'
import HistoryList from './components/HistoryList'

function App() {

  const [temp, setTemp] = useState(20)
  const [history, setHistory] = useState([])

  const addHistory = (newTemp) => {
    const newEntry = {
      temp: newTemp,
      time: new Date().toLocaleTimeString()
    }
    setHistory(prev => [...prev, newEntry])
  }
  
  const increaseTemp = () => {
      const newTemp = temp +1;
      setTemp(newTemp)
      addHistory(newTemp)
      return newTemp;
  }

  const decreaseTemp = () => {
      const newTemp = temp -1;
      setTemp(newTemp)
      addHistory(newTemp)
      return newTemp
  }

  const resetTemp = () => {
    setTemp(20)
    setHistory([])
  }

  return (
    <>
      <div className="app">
        <h1>Controlador de temperatura</h1>
        <TempDisplay temp={temp} />

        <TempControls
          onIncrease= { increaseTemp }
          onDecrease= { decreaseTemp }
          onReset=    { resetTemp }
        />

        <HistoryList history={history} />

      </div>
    </>
  )
}

export default App