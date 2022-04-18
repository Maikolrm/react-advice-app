import { useState, useEffect } from "react"

// AXIOS
import axios from "axios"

// COMPONENTS
import Loader from "./components/Loader"
import Advice from "./components/Advice"

function App() {
  // LOCAL STATE
  const [state, setState] = useState({ advice: { id: 0, advice: "" }, fetchCount: 0, fetching: false })

  // FETCH ADVICE
  async function fetchAdvice() {
    try {
      setState(prev => ({ ...prev, fetching: true }))
      const { data } = await axios.get("https://api.adviceslip.com/advice")
      setState(prev => ({ ...prev, advice: data.slip, fetching: false }))
    } catch (e) {
      console.log(e)
    }
  }

  // FIRST MOUNT
  useEffect(() => {
    fetchAdvice()
  }, [])

  // FETCH COUNT CHANGES
  useEffect(() => {
    state.fetchCount && fetchAdvice()
  }, [state.fetchCount])

  return state.advice.advice ? <Advice advice={state.advice} fetching={state.fetching} setState={setState} /> : <Loader />
}

export default App
