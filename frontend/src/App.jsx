import React from 'react'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import NoteDetailPage from './pages/NoteDetailPage'
import { Routes, Route } from 'react-router'
import toast from 'react-hot-toast'

const App = () => {
  return (
    <div>
      <button onClick={()=>toast.success("congrats")} className="text-green-300 p-4 bg-green-800 rounded m-4">Success</button>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/create' element={<CreatePage />} />
        <Route path='/note/:id' element={<NoteDetailPage />} />
      </Routes>
    </div>
  )
}

export default App