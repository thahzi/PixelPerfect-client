
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Header from './components/header/Header'
import Footer from './components/Footer/Footer'
import Dashboard from './pages/dashboard/Dashboard'
import Gallery from './pages/Gallery/Gallery'





function App() {
  

  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/gallery' element={<Gallery/>} />
      </Routes>
    <Footer/>
    </>
  )
}

export default App
