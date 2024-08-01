
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import Dashboard from './pages/dashboard/Dashboard'
import Gallery from './pages/Gallery/Gallery'
import Auth from './pages/Auth'


function App() {
  

  return (
    <>
    
      <Routes>
       
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Auth/>} />
        <Route path='/register' element={<Auth register/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/gallery' element={<Gallery/>} />
      </Routes>
    <Footer/>
    </>
  )
}

export default App
