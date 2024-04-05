import {BrowserRouter ,Routes,Route} from 'react-router-dom';
import Home from './Pages/Home'
import Profile from './Pages/Profile';
import React from 'react'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route>
        <Route path="/" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
        
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
