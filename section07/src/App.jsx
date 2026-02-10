import './App.css'
import Viewer from './components/Viewer'
import Controller from './components/Controller'
import Even from './components/Even'
import InputController from './components/InputController'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')

  const onClickButton = (value) => {
    setCount(count + value)
  }

  return (
    <div className="App">
      <h1>Simple Counter</h1>

      <InputController text={text} setText={setText} />

      <Viewer count={count} />

      {count % 2 === 0 && <Even />}

      <Controller onClickButton={onClickButton} />
    </div>
  )
}

export default App
