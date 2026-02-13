import { Routes, Route } from 'react-router-dom'
import New from './components/New'
import Home from './components/Home'
import Edit from './components/BoardEdit'
import BoardDetail from './components/BoardDetail'
import NotFound from './components/NotFound'
import './App.css'
import { BoardDispatchContext } from './context/BoardDispatchContext'
import { BoardStateContext } from './context/BoardStateContext'
import { useBoard } from './components/hooks/useBoard'

function App() {

  const { filteredBoard,
    onCreate_comment,
    onCreate,
    onUpdate,
    onDelete,
    clickFilterCategory,
    setCategory, } = useBoard();

  return (
    <>

      <BoardDispatchContext.Provider value={{ onCreate, onUpdate, onDelete, clickFilterCategory, setCategory, onCreate_comment }}>
        <BoardStateContext.Provider value={filteredBoard}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/boardDetail/:id" element={<BoardDetail />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </BoardStateContext.Provider >
      </BoardDispatchContext.Provider>

    </>
  )
}

export default App
