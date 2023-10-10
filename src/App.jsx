import { useEffect } from 'react'
import './App.css'
import { get_Location, get_historyWeather } from './apis/weatherApi'

function App() {

  useEffect(() => {
    get_Location()
  }, [])

  return (
    <>
      <p>api호출</p>
    </>
  )
}

export default App;
