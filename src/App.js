import { useEffect, useState } from 'react'
import './App.css'

export default function App() {
  const [Time, setTime] = useState(new Date())
  useEffect(() => {
    const Timer = setInterval(() => { return (setTime(new Date())) }, 1000)
    // return annonomus is really important when clear interval!
    return () => (
      clearInterval(Timer)
    )
  }, [Time])
  // Or Use the below interval //
  // setInterval(()=>{
  //   setTime(new Date())
  // },1000)
  const Hours = (h) => {
    return (
      h > 12 ? h - 12 : h
    )
  }
  const Minutes = (m) => {
    return m < 10 ? "0" + m : m
  }
  const Seconds = (s) => {
    return s < 10 ? "0" + s : s
  }
  return (
    <>
      <main>
        <div className='timer'>
          <h1>{Time.getDate()} - {Time.getMonth() + 1} - {Time.getFullYear()}</h1>
          <div className='time'>
            <h1>{Hours(Time.getHours()) < 10 ? "0" + Hours(Time.getHours()) : Hours(Time.getHours())} :</h1>
            <h1>{Minutes(Time.getMinutes())} :</h1>
            <h1>{Seconds(Time.getSeconds())}</h1>
          </div>
        </div>
      </main>
    </>
  )
}