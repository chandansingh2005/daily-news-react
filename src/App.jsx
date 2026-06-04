import React from 'react'

import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Feed from './pages/Feed'
import CreatePostPage from './pages/CreatePostPage'

function App() {

  return (

    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/feed" element={<Feed />} />

      <Route path="/create-post" element={<CreatePostPage />} />

    </Routes>
  )
}

export default App