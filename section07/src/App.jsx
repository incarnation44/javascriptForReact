import { useState } from 'react'
import Test from './Test'

function App() {
  const [show, setShow] = useState(true)

  return (
    <>
      <h1>마운트 / 언마운트 테스트</h1>

      <button onClick={() => setShow(!show)}>
        토글
      </button>

      {show && <Test />}
    </>
  )
}

export default App
