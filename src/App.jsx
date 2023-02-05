import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import HomePage from './HomePage'
import DilemmaPage from './DilemmaPage'
function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path=":code" element={<DilemmaPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
